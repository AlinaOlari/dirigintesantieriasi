/**
 * Configurație centrală a site-ului. Toate valorile lipsă (vezi README §„Date lipsă")
 * sunt marcate TODO aici — nu în componente — ca să poată fi completate dintr-un
 * singur loc înainte de lansare.
 */

export const site = {
  url: 'https://dirigintesantieriasi.ro',
  name: 'Olari Adrian Ionuț — Diriginte de șantier',
  titleTag: 'Diriginte de șantier Iași — Adrian Olari | RTE și consultanță tehnică',
  description:
    'Olari Adrian Ionuț — specialist autorizat ISC. Dirigenție de șantier, responsabil tehnic cu execuția (RTE) și consultanță tehnică în municipiul și județul Iași. Telefon 0740 298 859.',
  ogTitle: 'Diriginte de șantier Iași — Adrian Olari',
  ogDescription: 'Dirigenție de șantier, RTE și consultanță tehnică în Iași. Specialist autorizat ISC.',
  locale: 'ro_RO',
};

export const contact = {
  phoneDisplay: '0740 298 859',
  phoneHref: 'tel:+40740298859',
  phoneE164: '+40740298859',
  whatsappHref: 'https://wa.me/40740298859',
  whatsappHrefPrefilled:
    'https://wa.me/40740298859?text=Bun%C4%83%20ziua!%20Doresc%20informa%C8%9Bii%20despre%20serviciile%20de%20dirigen%C8%9Bie%20de%20%C8%99antier%2C%20RTE%20sau%20consultan%C8%9B%C4%83%20tehnic%C4%83.',
  email: 'olariadrian@yahoo.com',
  emailHref: 'mailto:olariadrian@yahoo.com',
  areaServed: 'Municipiul și județul Iași',
};

/**
 * Date lipsă (README §„Date lipsă") — de cerut clientului înainte de lansare.
 * Fiecare câmp e un placeholder evident, marcat TODO, folosit din componente
 * fără să fie nevoie de umblat prin markup când sosesc valorile reale.
 */
export const missingData = {
  // TODO: Numărul autorizației ISC — cel mai puternic element de încredere din pagină.
  // Afișat lângă badge-ul „AUTORIZAT ISC" din hero și în footer.
  iscAuthorizationNumber: 'TODO: nr. autorizație ISC',

  // TODO: Anii de experiență — activează a 4-a celulă din banda de credibilitate.
  // Cât timp e null, celula nu se randează (comportament identic cu prototipul: `ani > 0`).
  yearsOfExperience: null as number | null,

  // TODO: CUI / date firmă — cerință legală în România pentru servicii facturate.
  companyLegalInfo: 'TODO: CUI / denumire firmă (dacă activitatea se facturează prin firmă)',

  // TODO: Testimoniale confirmate de client, dar textele nu au fost încă trimise.
  // Secțiunea nu există în UI până nu sosesc textele reale.
  testimonials: [] as { author: string; role: string; quote: string }[],

  // TODO: Endpointul Formspree (sau alt serviciu de formulare) — citit din variabila
  // de mediu PUBLIC_FORM_ENDPOINT (vezi .env.example). Dacă lipsește, formularul
  // cade automat pe fallback mailto:.
  formEndpointEnvVar: 'PUBLIC_FORM_ENDPOINT',

  // TODO: Textul politicii de confidențialitate — linkul din footer duce spre o
  // secțiune placeholder pe pagină, nu spre text legal real.
  privacyPolicyText:
    'TODO: text politică de confidențialitate — de redactat împreună cu clientul înainte de lansare.',
};
