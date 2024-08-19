import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Bachelor Concepteur Développeur de Solutions Digitales',
      institution: 'Digital Campus',
      image: import('@/assets/logos/dc-logo.png'),
      dates: [new Date('2023.09'), new Date('2024.07')],
      description:
        "Développement approfondi de compétences dans la création de plans fonctionnels pour des interfaces web, en tenant compte des parcours utilisateur et des options ergonomiques. Conception de représentations visuelles d'interfaces web et mobiles en utilisant des logiciels de création graphique.",
      links: [website({ url: 'https://www.digital-campus.fr/formation/bachelor-dev' })],
    },
    {
      title: 'Formation Développeur Web et Web Mobile',
      institution: 'Philiance',
      image: import('@/assets/logos/philiance-logo.jpg'),
      dates: [new Date('2022.12'), new Date('2023.07')],
      description:
        "Aquisition de compétences solides en développement web, notamment en concevant et en développant un site e-commerce avec des fonctionnalités avancées. J'ai également créé des sites web responsives en suivant l'architecture MVC, garantissant ainsi une expérience utilisateur optimale.",
      links: [website({ url: 'https://www.philiance.com/formation/dwwm-developpeur-web-et-web-mobile/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
