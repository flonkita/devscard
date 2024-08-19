import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  bootstrap,
  docker,
  eslint,
  nextJs,
  pnpm,
  react,
  reactQuery,
  symfony,
  tailwindCss,
  phpmyadmin,
  directus,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Expérience Professionnelles',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Développeur Front-End',
      company: 'VanillaHR',
      image: import('@/assets/logos/vanillahr-logo.png'),
      dates: [new Date('2024-05'), new Date('2024-07')],
      description: `
        - Participation à la veille technologique
        - Participation à l'amélioration de la partie Front-End de l'application
        - Créations de contenus technologiques
        - Intégration de fonctionnalités avec Next.Js
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nextJs(), tailwindCss(), docker(), eslint(), reactQuery(), directus()],
      },
      links: [
        website({ url: 'https://www.vanillahr.com/fr' }),
        linkedin({ url: 'https://www.linkedin.com/company/vanillahr/' }),
      ],
    },
    {
      role: 'Développeur / Intégrateur Web',
      company: 'E-Pastelsoft',
      image: import('@/assets/logos/epastelsoft-logo.png'),
      dates: [new Date('2023-06'), new Date('2023-07')],
      description: `
        - Créations de sites sous Symfony
        - Intégration de contenus
        - Établissement de recettes pour les projets finis
      `,
      tagsList: {
        title: 'Technologies',
        tags: [symfony(), bootstrap(), phpmyadmin()],
      },
      links: [
        website({ url: 'https://www.epastelsoft.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/epastelsoft/' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
