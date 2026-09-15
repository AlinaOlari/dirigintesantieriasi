export interface Service {
  num: string;
  tag: string;
  title: string;
  text: string;
  items: string[];
}

/** Cele trei carduri din secțiunea „Servicii" — copy exact din fișierul de design. */
export const services: Service[] = [
  {
    num: '01',
    tag: 'PENTRU BENEFICIARI ȘI INVESTITORI',
    title: 'Dirigenție de șantier',
    text: 'Reprezint tehnic beneficiarul pe parcursul execuției: urmăresc respectarea proiectului, cerințele de calitate și documentația lucrării, în limitele domeniilor autorizate.',
    items: [
      'Verificarea documentelor necesare începerii lucrărilor',
      'Urmărirea respectării proiectului tehnic',
      'Verificări în etapele importante ale execuției',
      'Participarea la fazele determinante',
      'Semnalarea neconformităților constatate',
      'Urmărirea documentelor pentru cartea tehnică',
      'Asistență tehnică la recepție',
    ],
  },
  {
    num: '02',
    tag: 'PENTRU FIRMELE EXECUTANTE',
    title: 'Responsabil tehnic cu execuția',
    text: 'Asigur controlul tehnic al execuției din partea executantului, în domeniile autorizate, prin urmărirea proiectului, a procedurilor tehnice și a reglementărilor aplicabile.',
    items: [
      'Verificarea condițiilor tehnice de execuție',
      'Urmărirea respectării proiectului',
      'Verificarea documentelor de calitate',
      'Semnalarea neconformităților',
      'Colaborare tehnică cu participanții la proiect',
      'Urmărirea măsurilor tehnice stabilite',
      'Documentarea activităților contractate',
    ],
  },
  {
    num: '03',
    tag: 'PENTRU PERSOANE FIZICE ȘI COMPANII',
    title: 'Consultanță tehnică',
    text: 'Sprijin tehnic pentru înțelegerea documentației, evaluarea etapelor lucrării și decizii mai bine fundamentate — înainte, în timpul sau la finalul execuției.',
    items: [
      'Analizarea documentației disponibile',
      'Verificarea ofertelor și devizelor',
      'Verificarea situațiilor de lucrări',
      'Consultanță înaintea începerii construcției',
      'Asistență la recepția unei locuințe',
      'Consultanță înaintea achiziției unui imobil',
      'Sprijin în relația beneficiar — executant',
    ],
  },
];
