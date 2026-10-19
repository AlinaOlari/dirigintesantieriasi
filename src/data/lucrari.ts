import type { ImageMetadata } from 'astro';
import imgBloc from '../assets/images/lucrare-bloc.webp';
import imgHala from '../assets/images/lucrare-hala.webp';
import imgPiata from '../assets/images/lucrare-piata.webp';
import imgTerminal from '../assets/images/lucrare-terminal.webp';
import imgFundatii from '../assets/images/lucrare-fundatii.webp';
import imgUtilitati from '../assets/images/lucrare-utilitati.webp';
import imgBlocRediu from '../assets/images/lucrare-bloc-rediu.webp';

export interface Lucrare {
  src: ImageMetadata;
  alt: string;
  title: string;
  meta: string;
}

/** Cele 6 lucrări din secțiunea „Lucrări" — copy exact din fișierul de design. */
export const lucrari: Lucrare[] = [
  {
    src: imgBloc,
    alt: 'Bloc de locuințe finalizat la exterior, județul Iași',
    title: 'Bloc de locuințe',
    meta: 'CONSTRUCȚII CIVILE · JUD. IAȘI',
  },
  {
    src: imgHala,
    alt: 'Hală cu structură metalică în curs de execuție',
    title: 'Hală cu structură metalică',
    meta: 'CONSTRUCȚII INDUSTRIALE',
  },
  {
    src: imgPiata,
    alt: 'Piața de legume și fructe Tomești, lucrare publică finalizată',
    title: 'Piața agroalimentară Tomești',
    meta: 'LUCRARE PUBLICĂ · UAT',
  },
  {
    src: imgTerminal,
    alt: 'Terminal de pasageri finalizat, spațiu interior',
    title: 'Terminal pasageri',
    meta: 'INFRASTRUCTURĂ · RECEPȚIE',
  },
  {
    src: imgFundatii,
    alt: 'Fundații din beton armat cu buloane de ancoraj',
    title: 'Fundații speciale',
    meta: 'BETON ARMAT · ANCORAJE',
  },
  {
    src: imgUtilitati,
    alt: 'Cămin de vane pentru rețea de utilități în execuție',
    title: 'Rețele edilitare',
    meta: 'GOSPODĂRIE COMUNALĂ',
  },
  {
    src: imgBlocRediu,
    alt: 'Bloc de locuințe finalizat la exterior, Rediu, județul Iași',
    title: 'Bloc de locuințe din Rediu, jud. Iași',
    meta: 'CONSTRUCȚII CIVILE · JUD. IAȘI',
  },
];
