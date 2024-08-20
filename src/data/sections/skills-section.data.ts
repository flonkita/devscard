import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  astro,
  figma,
  flutter,
  mongoDb,
  notion,
  npm,
  prettier,
  react,
  headlessUi,
  tailwindCss,
  typescript,
  nextJs,
  symfony,
  mysql,
  phpmyadmin,
  csharp,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Compétences',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Ce que je sais faire',
      skills: [
        astro({
          level: 4,
          description:
            'Découvert au Digital Campus, Astro s\'est révélé être mon coup de coeur pour la construction de sites web de manière rapide et simple tout en intégrant d\'autres frameworks en plus (Tailwind, Vue, React...).',
        }),
        symfony({
          level: 3,
          description:
            'Symfony est un framework PHP qui m\'as permis de concevoir un site e-commerce from scratch. Il est basé sur le modèle MVC et permet de créer des applications web de manière structurée.',
        }),
        notion({
          level: 4,
          description: 'Outil de prise de notes et de gestion de projets. Il permet de créer des pages, des bases de données, des tableaux, des calendriers, des listes de tâches, des documents, des wikis, des bases de connaissances et des tableaux de bord.',
        }),
        nextJs({
          level: 4,
          description: 'Framework React qui permet de créer des applications web de manière rapide et efficace. Il est basé sur le modèle MVC et permet de créer des applications web de manière structurée.',
        }),
        figma({ level: 3 }),
        tailwindCss({ level: 4 }),
        prettier({ level: 5 }),
        typescript({
          level: 3,
          description:
            'Typescript s\'est révélé être un outil efficace pour la création de sites web. Il permet de typer les variables et les fonctions pour éviter les erreurs de développement.',
        }),
        flutter({ level: 2 }),
        react({ level: 3 }),
        phpmyadmin({ level: 4 }),
        npm({ level: 3 }),
      ],
    },
    {
      title: 'Ce que je souhaite apprendre',
      skills: [mysql(), csharp(), mongoDb(), headlessUi()],
    },
    {
      title: 'Langues',
      skills: [
        { icon: 'circle-flags:fr', name: 'Français - natif' },
        { icon: 'circle-flags:en', name: 'English - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
