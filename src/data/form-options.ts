export interface SelectOption {
  value: string;
  label: string;
}

export const personTypeOptions: SelectOption[] = [
  { value: 'fizica', label: 'Persoană fizică' },
  { value: 'firma', label: 'Firmă' },
];

export const serviceOptions: SelectOption[] = [
  { value: '', label: 'Alege serviciul...' },
  { value: 'dirigentie', label: 'Dirigenție de șantier' },
  { value: 'rte', label: 'Responsabil tehnic cu execuția (RTE)' },
  { value: 'consultanta', label: 'Consultanță tehnică' },
  { value: 'receptie', label: 'Asistență la recepție' },
  { value: 'achizitie', label: 'Consultanță înainte de achiziția unui imobil' },
  { value: 'altul', label: 'Alt serviciu' },
];

/** Etichete scurte folosite în payload-ul trimis (subiect + rânduri de e-mail). */
export const serviceLabelsForPayload: Record<string, string> = {
  dirigentie: 'Dirigenție de șantier',
  rte: 'RTE',
  consultanta: 'Consultanță tehnică',
  receptie: 'Asistență la recepție',
  achizitie: 'Consultanță achiziție imobil',
  altul: 'Alt serviciu',
};
