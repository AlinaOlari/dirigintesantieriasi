export interface NavLink {
  id: string;
  label: string;
  href: string;
}

/** Linkurile din header/meniul mobil, în ordinea din design. */
export const navLinks: NavLink[] = [
  { id: 'servicii', label: 'Servicii', href: '#servicii' },
  { id: 'domenii', label: 'Domenii', href: '#domenii' },
  { id: 'lucrari', label: 'Lucrări', href: '#lucrari' },
  { id: 'colaborare', label: 'Cum colaborăm', href: '#colaborare' },
  { id: 'despre', label: 'Despre', href: '#despre' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/** Ordinea secțiunilor verificate de scrollspy (include „acasa", care nu are link în nav). */
export const scrollspySectionIds = [
  'acasa',
  'servicii',
  'domenii',
  'lucrari',
  'colaborare',
  'despre',
  'contact',
];
