// src/data/team-experts.js

// Rasmlaringizni o'zingizning to'g'ri yo'llaridan import qiling
import Bacardo from '../assets/images-png/Bacardo.png';
import Loreno from '../assets/images-png/Loreno.png';
import Pelore from '../assets/images-png/Pelore.png';
import { FacebookIcon } from '../assets/icons/fasebook.icon';
import { QushchaIcon } from '../assets/icons/qushcha.icon';
import { InstagramIcon } from '../assets/icons/instagram.icon';

export const TeamExperts = [
  {
    id: 1,
    name: 'Giovani Bacardo',
    role: 'Farmer',
    img: Bacardo,
    socials: {
      facebook: { FacebookIcon }, // Linklarni joylashtiring
      instagram: { InstagramIcon },
      twitter: { QushchaIcon },
    },
  },
  {
    id: 2,
    name: 'Marianne Loreno',
    role: 'Designer',
    img: Loreno,
    socials: {
      facebook: { FacebookIcon },
      instagram: { InstagramIcon },
      twitter: { QushchaIcon },
    },
  },
  {
    id: 3,
    name: 'Riga Pelore',
    role: 'Farmer',
    img: Pelore,
    socials: {
      facebook: { FacebookIcon },
      instagram: { InstagramIcon },
      twitter: { QushchaIcon },
    },
  },
];
