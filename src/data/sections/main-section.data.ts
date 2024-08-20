import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin} from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/flo-profile.jpg'),
  fullName: 'Florent Nkita',
  role: 'Mastère Expert en Solutions Digitales - Futur Alternant',
  details: [
    { label: 'Téléphone', value: '07 81 76 62 12', url: 'tel:07 81 76 62 12' },
    { label: 'Mail', value: 'florent.nkita@gmail.com', url: 'mailto:florent.nkita@gmail.com' },
    { label: 'Provenance', value: 'Bordeaux / Paris, France' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '07 81 76 62 12' },
    { label: 'Email', value: 'florent.nkita@gmail.com' },
    { label: 'LinkedIn', value: '/in/florent-nkita/', url: 'https://linkedin.com/in/florent-nkita/' },
    { label: 'GitHub', value: '/flonkita', url: 'https://github.com/flonkita' },
    { label: 'Website', value: 'https://portfolio-flonkita.vercel.app/', url: '/', fullRow: true },
  ],
  description:
    "Après une expérience réussie en tant que développeur Front-End, je suis à la quête de nouveaux défis pour valider mon **Mastère Expert en Solutions Digitales** sous la forme d'une alternance pour une durée de *2 ans*, avec **une semaine** de cours dynamiques et **deux semaines** en entreprise.</br> Mon objectif : apprendre, grandir et développer dans unenvironnement professionnel stimulant !",
  tags: [{ name: 'Ouvert à une alternance !' }, { name: "Sur l'avancement d'un projet" }],
  action: {
    label: 'Téléchargez mon CV !',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Florent_Nkita.pdf',
  },
  links: [github({ url: 'https://github.com/flonkita' }), linkedin({ url: 'https://linkedin.com/in/florent-nkita/' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
