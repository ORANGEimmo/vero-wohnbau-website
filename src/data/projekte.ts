export interface Projekt {
  slug: string;
  name: string;
  untertitel: string;
  ort: string;
  status: string;
  jahr: string;
  hero: string;
  gallery: string[];
  beschreibung: string;
  highlights: string[];
  fakten: { label: string; wert: string }[];
  ausstattung?: { titel: string; text: string }[];
  lage?: string;
}

export const projekte: Projekt[] = [
  {
    slug: "gut-hirschenlehen",
    name: "Gut Hirschenlehen",
    untertitel: "Mein Zuhause am Königssee",
    ort: "Schönau am Königssee",
    status: "In Bau",
    jahr: "Fertigstellung Q2 2026",
    hero: "/assets/gut-hirschenlehen-hero.webp",
    gallery: [
      "/assets/gut-hirschenlehen-front.webp",
      "/assets/gut-hirschenlehen-bath.webp",
      "/assets/gut-hirschenlehen-living.webp",
    ],
    beschreibung:
      "Acht Wohneinheiten inmitten der Bergwelt von Schönau am Königssee. Zeitgenössischer Landhausstil, kombiniert mit bayerischer Bautradition. Holz, Stein und porosiertes Mauerwerk — eine Fassade, die zur umliegenden Landschaft passt und mit ihr altert.",
    highlights: [
      "8 Wohneinheiten, 547 m² Wohnfläche gesamt",
      "KfW 40 / QNG-zertifiziert",
      "Fernwärme aus regionaler Bioenergie",
      "Nutzung als Hauptwohnsitz oder Feriendomizil",
      "9 Stellplätze auf 730 m² Grundstück",
    ],
    fakten: [
      { label: "Adresse", wert: "Waldhauserstraße 29a, 83471 Schönau" },
      { label: "Wohneinheiten", wert: "8" },
      { label: "Wohnfläche", wert: "547,02 m²" },
      { label: "Grundstück", wert: "730 m²" },
      { label: "Stellplätze", wert: "9" },
      { label: "Standard", wert: "KfW 40 / QNG" },
      { label: "Baubeginn", wert: "Q1 2025" },
      { label: "Fertigstellung", wert: "Q2 2026" },
      { label: "Kaufpreis", wert: "ab 488.728 € brutto" },
      { label: "Provision", wert: "3,57% inkl. MwSt" },
    ],
    ausstattung: [
      {
        titel: "Materialien",
        text: "Echtholz-Dielenparkett in den Wohnräumen, Kunststeinbeläge in den Bädern. Massivholz und porosiertes Mauerwerk als Tragwerk, regionaltypische Holzverschalung an der Fassade.",
      },
      {
        titel: "Energie",
        text: "Beheizung über die Fernwärme der Bioenergie Berchtesgadener Land GmbH. Jede Wohneinheit mit Fußbodenheizung und Einzelraumregelung.",
      },
      {
        titel: "Bäder",
        text: "Bodengleiche Duschen, Serie Connect Cube von Ideal Standard. Abstellräume oder Gäste-WC in ausgewählten Einheiten.",
      },
      {
        titel: "Außenbereich",
        text: "Balkone aus unbehandeltem Holz, das mit der Witterung natürlich verwittert. Terrassen mit Kunststeinplatten und sickerfähigen Verfugungen.",
      },
    ],
    lage:
      "Zentrale Innenstadtlage in Schönau am Königssee. Der Nationalpark Berchtesgaden, der Königssee und die Jennerbahn liegen in unmittelbarer Nähe. Bahnhof und Bundesstraße sind in wenigen Minuten erreichbar, der Flughafen Salzburg in unter 40 Minuten.",
  },
  {
    slug: "chalet-hochwald",
    name: "Chalet Hochwald",
    untertitel: "Wohnen am Waldrand",
    ort: "Berchtesgaden",
    status: "In Vorbereitung",
    jahr: "Geplante Fertigstellung Q1 2028",
    hero: "/assets/chalet-hochwald-hero.webp",
    gallery: [
      "/assets/chalet-hochwald-01.webp",
      "/assets/chalet-hochwald-03.webp",
      "/assets/chalet-hochwald-02.webp",
    ],
    beschreibung:
      "Ein zurückhaltendes Chalet-Ensemble am Waldrand von Berchtesgaden. Vier Einheiten, je mit eigenem Eingang, Holzfassade und großzügigem Übergang zur umliegenden Natur. Details folgen — wir nehmen uns Zeit, bis das Konzept stimmt.",
    highlights: [
      "4 Wohneinheiten in zwei Baukörpern",
      "Holz-Hybrid-Bauweise",
      "Direkte Lage am Waldrand",
      "Nachhaltiger Energiestandard",
    ],
    fakten: [
      { label: "Standort", wert: "Berchtesgaden" },
      { label: "Wohneinheiten", wert: "4 (geplant)" },
      { label: "Grundstück", wert: "844 m²" },
      { label: "Bauweise", wert: "Holz-Hybrid" },
      { label: "Baubeginn", wert: "Q1 2027" },
      { label: "Fertigstellung", wert: "Q1 2028" },
      { label: "Kaufpreis", wert: "ab 397.730 €" },
      { label: "Provision", wert: "Keine" },
    ],
    lage:
      "Berchtesgaden, ruhige Lage am Waldrand. Anbindung an Bundesstraße und Bahnhof in unter 10 Minuten. Detaillierte Lageinformationen folgen mit dem Vertriebsstart.",
  },
];

export function getProjekt(slug: string): Projekt | undefined {
  return projekte.find((p) => p.slug === slug);
}
