export const fraudIncidents = [
  {
    id: 1,
    title: "Falske kommuneansatte lurer eldre kvinner",
    date: "15. mars 2024",
    location: "Sarpsborg, Østfold",
    x: 250,
    y: 175,
    loss: "45 000 kr",
    description: "To menn oppsøkte en 78 år gammel kvinne og utga seg for å være fra kommunen. De hevdet at hun måtte betale for vannreparasjoner som aldri ble utført. Kvinnen overførte penger før hun oppdaget svindelen.",
    method: "Hjemmebesøk med falsk identitet som kommuneansatte"
  },
  {
    id: 2,
    title: "Telefon-svindel rammer pensjonister",
    date: "22. april 2024", 
    location: "Lillestrøm, Akershus",
    x: 190,
    y: 125,
    loss: "32 000 kr",
    description: "En 82 år gammel mann mottok telefon fra personer som utga seg for å være fra kommunens skatteavdeling. De krevde umiddelbar betaling av påståtte restskatter og truet med tvangssalg av boligen.",
    method: "Telefonsvindel med trussel om tvangssalg"
  },
  {
    id: 3,
    title: "Falske takseringsgebyr kreves inn",
    date: "8. mai 2024",
    location: "Fredrikstad, Østfold", 
    x: 230,
    y: 185,
    loss: "28 500 kr",
    description: "Svindlere ringte eldre beboere og påsto at kommunen krevde inn nye takseringsgebyr for eiendom. De oppga falske referansenummer og bankkonto for betaling.",
    method: "Telefonsvindel med falske kommunale avgifter"
  },
  {
    id: 4,
    title: "Renovasjonsgebyr-svindel",
    date: "14. juni 2024",
    location: "Moss, Østfold",
    x: 180,
    y: 165,
    loss: "19 000 kr",
    description: "En gruppe svindlere tok kontakt med flere eldre personer og krevde betaling for påståtte endringer i renovasjonsordningen. De brukte kommunens logo i falske e-poster.",
    method: "E-post og telefon med kommunal logo-misbruk"
  }
];

export const adviceBoxes = [
  {
    id: 1,
    type: 'warning',
    title: 'ADVARSEL: Slik opererer svindlerne',
    content: [
      'Kontakter deg på telefon eller kommer hjem til deg',
      'Utgir seg for å være fra kommunen, skatteetaten eller andre offentlige instanser',
      'Krever umiddelbar betaling for tjenester du ikke har bestilt',
      'Presser deg til å betale der og da, uten mulighet til å tenke deg om',
      'Ber om bankopplysninger eller PIN-koder'
    ],
    source: 'Politiet i Østfold'
  },
  {
    id: 2,
    type: 'advice', 
    title: 'Slik beskytter du deg',
    content: [
      'Kommunen tar aldri kontakt for å kreve penger på telefon eller døra',
      'Be om skriftlig dokumentasjon og kontakt kommunen selv for å sjekke',
      'Gi aldri ut bankopplysninger eller PIN-koder til ukjente',
      'Ta deg tid til å tenke - seriøse henvendelser tåler å vente',
      'Snakk med familie eller venner før du betaler noe'
    ],
    source: 'Sarpsborg kommune'
  },
  {
    id: 3,
    type: 'contact',
    title: 'Har du blitt utsatt for svindel?',
    content: [
      'Ring politiet på 02800 for å anmelde forholdet',
      'Kontakt banken din umiddelbart for å stoppe betalinger',
      'Ta vare på all dokumentasjon og meldinger fra svindlerne',
      'Fortell om hendelsen til familie og venner som advarsel'
    ],
    source: 'Politiet'
  }
];

export const protectionSteps = [
  {
    id: 1,
    title: 'Verifiser alltid avsender',
    description: 'Ring direkte til kommunen på det offisielle telefonnummeret for å sjekke om henvendelsen er ekte.'
  },
  {
    id: 2, 
    title: 'Aldri betal umiddelbart',
    description: 'Seriøse krav fra det offentlige kommer alltid med betalingsfrist og mulighet til å klage.'
  },
  {
    id: 3,
    title: 'Be om skriftlig dokumentasjon', 
    description: 'Alle kommunale avgifter og krav dokumenteres skriftlig med referansenummer.'
  },
  {
    id: 4,
    title: 'Snakk med andre',
    description: 'Rådfør deg med familie, venner eller banken din før du betaler noe du er usikker på.'
  }
];