import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Recommandations',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/enes-dogan.jpeg'),
      author: 'Enes Dogan',
      relation: 'Manager à VanillaHR',
      content:
        'Florent a fait un bon passage chez nous en tant que stagiaire, il a pu nous prêter main forte sur nos projets tout en améliorant ses compétences avec sa touche de bonne humeur.',
      links: [linkedin({ url: 'https://www.linkedin.com/in/enes-dogan-9449a38b/' })],
    },
    {
      image: import('@/assets/testimonials/sam-ducourant.jpeg'),
      author: 'Sam Ducourant',
      relation: 'Directeur Technique, Co-Fondateur de VanillaHR, Supérieur Direct',
      content:
        "Florent s'est montré compétent dans son travail, il a su s'adapter à notre environnement et a su apporter des solutions à nos problèmes. Il a été un élément clé dans notre équipe de développement.",
      links: [
        linkedin({ url: 'https://www.linkedin.com/in/samducourant/' }),
        website({ url: 'https://www.vanillahr.com/en/get-started' }),
      ],
    },
    {
      image: import('@/assets/testimonials/sada-soumare.jpeg'),
      author: 'Sada Soumare',
      relation: 'Tuteur de stage, Fondateur de E-Pastelsoft',
      content:
        "Durant son stage, Florent était motivé à apprendre et à s'améliorer dans le développement web sous Symfony. Il a su s'intégrer dans l'équipe et les attentes du projet  et a su apporter des solutions à nos problèmes.",
      links: [
        github({ url: 'https://www.linkedin.com/in/sada-soumare-2131a5a5/' }),
        website({ url: 'https://www.epastelsoft.com/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
