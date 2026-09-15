export interface Domeniu {
  code: string;
  desc: string;
}

/** Date oficiale — nu le modifica fără confirmare. */
export const dsDomenii: Domeniu[] = [
  { code: 'DOMENIUL 1', desc: 'Consolidare și restaurare monumente istorice — toate categoriile de importanță' },
  { code: 'DOMENIUL 2.2', desc: 'Construcții civile, industriale și agricole — categoria de importanță C' },
  { code: 'DOMENIUL 3.1', desc: 'Drumuri, poduri, tunele, piste de aviație, transport pe cablu — interes național' },
  { code: 'DOMENIUL 3.3', desc: 'Drumuri, poduri, tunele, piste de aviație, transport pe cablu — interes local' },
  { code: 'DOMENIUL 6', desc: 'Construcții edilitare și de gospodărie comunală' },
  { code: 'DOMENIUL 7', desc: 'Lucrări de îmbunătățiri funciare' },
];

/** Date oficiale — nu le modifica fără confirmare. */
export const rteDomenii: Domeniu[] = [
  { code: 'DOMENIUL 1.1', desc: 'Construcții civile, industriale și agricole' },
  { code: 'DOMENIUL 9.1', desc: 'Construcții edilitare și de gospodărie comunală' },
  { code: 'DOMENIUL 11.1', desc: 'Lucrări speciale de fundații' },
];
