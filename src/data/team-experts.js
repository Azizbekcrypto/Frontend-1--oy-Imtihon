
import Bacardo from '../assets/images-png/Bacardo.png';
import Loreno from '../assets/images-png/Loreno.png';
import Pelore from '../assets/images-png/Pelore.png';
import { Facebook } from '../assets/icons/fasebook.icon';
import { Twitter } from '../assets/icons/qushcha.icon';
import { Insta } from '../assets/icons/instagram.icon';

export const TeamExperts = [
  {
    id: 1,
    name: 'Giovani Bacardo',
    role: 'Farmer',
    img: Bacardo,
    socials: {
      facebook: { Facebook }, // Linklarni joylashtiring
      instagram: { Insta },
      twitter: { Twitter },
    },
  },
  {
    id: 2,
    name: 'Marianne Loreno',
    role: 'Designer',
    img: Loreno,
    socials: {
      facebook: { Facebook }, // Linklarni joylashtiring
      instagram: { Insta },
      twitter: { Twitter },
    },
  },
  {
    id: 3,
    name: 'Riga Pelore',
    role: 'Farmer',
    img: Pelore,
    socials: {
      facebook: { Facebook }, // Linklarni joylashtiring
      instagram: { Insta },
      twitter: { Twitter },
    },
  },
];
