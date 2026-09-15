export interface Audience {
  title: string;
  text: string;
}

/** Cele 5 publicuri din secțiunea „Pentru cine". */
export const audiences: Audience[] = [
  { title: 'Persoane fizice', text: 'Pentru construcția, renovarea, recepția sau achiziția unei locuințe.' },
  { title: 'Dezvoltatori imobiliari', text: 'Pentru urmărirea tehnică și documentarea etapelor proiectului.' },
  { title: 'Firme de construcții', text: 'Pentru servicii RTE în domeniile autorizate.' },
  { title: 'Asociații și organizații', text: 'Pentru reabilitări, intervenții și proiecte cu sprijin tehnic.' },
  { title: 'Comune și municipii (UAT)', text: 'Pentru lucrări publice și investiții care necesită servicii autorizate.' },
];
