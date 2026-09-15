export interface Step {
  n: string;
  title: string;
  text: string;
}

/** Cei 6 pași din secțiunea „Cum colaborăm". */
export const steps: Step[] = [
  { n: '1', title: 'Discuția inițială', text: 'Îmi transmiți tipul lucrării, localitatea și serviciul de care ai nevoie.' },
  { n: '2', title: 'Analiza informațiilor', text: 'Analizez stadiul lucrării și documentele disponibile.' },
  { n: '3', title: 'Stabilirea serviciilor', text: 'Clarificăm activitățile necesare și limitele colaborării.' },
  { n: '4', title: 'Oferta', text: 'Primești o propunere adaptată proiectului tău.' },
  { n: '5', title: 'Colaborarea tehnică', text: 'Se desfășoară verificările și activitățile convenite.' },
  { n: '6', title: 'Comunicare și documentare', text: 'Primești informații clare despre aspectele tehnice constatate.' },
];
