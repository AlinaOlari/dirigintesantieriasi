export interface Benefit {
  title: string;
  text: string;
}

/** Cele 6 beneficii din secțiunea „De ce". */
export const benefits: Benefit[] = [
  { title: 'Prezență în etapele importante', text: 'Verificări adaptate stadiului și complexității lucrării.' },
  { title: 'Comunicare directă', text: 'Discuți direct cu specialistul implicat în proiect.' },
  { title: 'Atenție la documentație', text: 'Urmăresc documentele tehnice aferente activităților contractate.' },
  { title: 'Explicații clare', text: 'Aspectele tehnice sunt prezentate într-un limbaj accesibil.' },
  { title: 'Abordare independentă', text: 'Observațiile sunt fundamentate pe documentație și pe situația din teren.' },
  { title: 'Activitate locală', text: 'Disponibilitate pentru proiecte în municipiul și județul Iași.' },
];
