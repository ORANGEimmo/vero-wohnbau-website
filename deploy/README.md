# Deployment

Die Website wird auf einen **Hostinger-VPS** ausgeliefert (Caddy als Webserver),
nicht über Vercel.

## Pipeline

Bei jedem Push auf `main` läuft [.github/workflows/deploy.yml](../.github/workflows/deploy.yml):

1. Build mit `bun run build` → statische Ausgabe in `dist/`.
2. `rsync --delete` von `dist/` in den Web-Root auf dem VPS
   (`secrets.VPS_TARGET_PATH`, aktuell `/var/www/vero-wohnbau`).
3. `rsync` der Caddy-Site-Config [`deploy/caddy/vero-wohnbau.caddy`](caddy/vero-wohnbau.caddy)
   nach `/etc/caddy/conf.d/vero-wohnbau.caddy`.
4. `caddy validate` + `caddy reload` (über die lokale Admin-API, **kein sudo nötig**).

### Secrets (GitHub Actions)

`VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_TARGET_PATH`.

## Caddy auf dem VPS

Die Haupt-Caddyfile (`/etc/caddy/Caddyfile`, root) enthält die globalen Optionen,
andere Sites und bindet die Site-Configs ein:

```
import /etc/caddy/conf.d/*.caddy
```

`/etc/caddy/conf.d/` gehört dem Deploy-User, damit die Pipeline ohne erhöhte Rechte
schreiben kann. Die VERO-Config in diesem Repo ist die **Source of Truth** und wird
1:1 dorthin kopiert.

### Wichtig: Routing

Astro baut im Directory-Format (`/seite/index.html`). Caddy muss daher
`try_files {path} {path}/index.html` verwenden. Der frühere SPA-Fallback
`try_files {path} /index.html` lieferte für **jede** Unterseite die Startseite aus
(behoben 2026-05-27).

## Manuell anwenden (falls nötig)

```bash
scp deploy/caddy/vero-wohnbau.caddy <user>@<host>:/etc/caddy/conf.d/vero-wohnbau.caddy
ssh <user>@<host> 'caddy validate --config /etc/caddy/Caddyfile && caddy reload --config /etc/caddy/Caddyfile'
```
