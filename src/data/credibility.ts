import { missingData } from '../config/site';

export interface CredItem {
  title: string;
  text: string;
}

/**
 * Banda de credibilitate. A patra celulă („Ani de activitate") apare doar
 * dacă `missingData.yearsOfExperience` e completat — identic cu logica
 * `ani > 0` din prototip.
 */
export function credibilityItems(): CredItem[] {
  const years = missingData.yearsOfExperience;
  const items: (CredItem | null)[] = [
    years && years > 0
      ? { title: `${years}+ ani de activitate`, text: 'Experiență în urmărirea tehnică a execuției.' }
      : null,
    { title: 'Domenii diriginte ISC', text: 'De la construcții civile la drumuri și monumente istorice.' },
    { title: 'Domenii RTE', text: 'Civile-industriale, edilitare și fundații speciale.' },
    { title: 'Municipiul și județul Iași', text: 'Disponibilitate pentru deplasări în tot județul.' },
  ];
  return items.filter((item): item is CredItem => item !== null);
}
