import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, website } from '../helpers/links';
import {
  css,
  flutter,
  html,
  javascript,
  pnpm,
  prettier,
  react,
  tailwindCss,
  symfony,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projets',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Sneakpeek',
      image: import('@/assets/portfolio/sneakpeek.png'),
      dates: [new Date('2024-01'), null],
      details: [
        { label: 'Mon rôle', value: ['Développeur Full-Stack', 'UX / UI Designer'] },
        { label: 'Catégories', value: ['Appli Web', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'Soon...', url: '#' },
        { label: 'Repository', value: 'https://github.com/flonkita/sneakpeek_sf', url: '#' },
      ],
      description:
        "Projet pour le Bachelor, une marketplace nommée 'Sneakpeek' où il y aura des ventes, achats de paires de baskets. Les utilisateurs pourront s'inscrire, se connecter, ajouter des produits à leur panier, les acheter, les vendre etc.",
      tagsList: {
        title: 'Technologies utilisées',
        tags: [symfony(), tailwindCss(), pnpm(), prettier()],
      },
      links: [github({ url: 'https://github.com/flonkita/sneakpeek_sf' }), demo({ url: '#' })],
    },
    {
      name: 'Appli ToDo',
      image: import('@/assets/portfolio/todo-app-logo.png'),
      dates: [new Date('2023-11'), new Date('2024-01')],
      details: [
        { label: 'Mon rôle', value: ['Développeur Mobile', 'UX / UI Designer'] },
        { label: 'Catégories', value: ['Appli Mobile'] },
      ],
      pdfDetails: [
        {
          label: 'Repository',
          value: 'lien vers le code source',
          url: 'https://github.com/flonkita/ToDo-App',
        },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/todo-app-1.png'), alt: "Capture d'écran 1" },
        { src: import('@/assets/portfolio/todo-app-2.png'), alt: "Capture d'écran 2" },
        { src: import('@/assets/portfolio/todo-app-3.png'), alt: "Capture d'écran 3" },
      ],
      description:
        "Première application mobile que j'ai développée avec Flutter. Elle permet de gérer une liste de tâches à faire, de les marquer comme terminées et de les supprimer. Les données sont stockées localement sur l'appareil de l'utilisateur.",
      tagsList: {
        title: 'Technologies utilisées',
        tags: [flutter()],
      },
      links: [github({ url: 'https://github.com/flonkita/ToDo-App' })],
    },
    {
      name: 'Tic-Tac-Toe',
      image: import('@/assets/portfolio/tic-tac-toe.png'),
      dates: [new Date('2023-07'), new Date('2023-09')],
      details: [
        { label: 'Mon rôle', value: ['Développeur Front-End', 'Web Designer'] },
        { label: 'Catégories', value: ['Appli Web', 'Open source'] },
      ],
      pdfDetails: [
        {
          label: 'Demo',
          value: 'Lien vers le jeu du Morpion (Tic-Tac-Toe) en ligne',
          url: 'https://tic-tac-toe-flonkita.vercel.app/',
        },
        {
          label: 'Repository',
          value: 'Code source',
          url: 'https://github.com/flonkita/TicTacToe',
        },
      ],
      description:
        'Ce projet est une implémentation du jeu du Morpion (Tic-Tac-Toe) en utilisant React. Il permet aux joueurs de s\'affronter en alternant entre "X" et "O", et le jeu détecte automatiquement le gagnant ou le match nul.',
      tagsList: {
        title: 'Technologies utilisées',
        tags: [react(), css(), pnpm()],
      },
      links: [
        website({ url: 'https://tic-tac-toe-flonkita.vercel.app/' }),
        github({ url: 'https://github.com/flonkita/TicTacToe' }),
      ],
    },
    {
      name: 'Pixel Art Maker',
      image: import('@/assets/portfolio/pixel-art-maker-logo.png'),
      dates: [new Date('2016-05'), new Date('2018-07')],
      details: [
        { label: 'Mon rôle', value: 'Développeur Front-End' },
        { label: 'Catégories', value: ['Appli Mobile', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/pixel-art-maker-2.png'), alt: "Capture d'écran 1" },
        { src: import('@/assets/portfolio/pixel-art-maker.png'), alt: "Capture d'écran 2" },
      ],
      description:
        'Ce générateur de tableau de pixel art est un outil qui permet aux utilisateurs de créer des images en utilisant une grille de pixels colorés.',
      tagsList: {
        title: 'Technologies utilisées',
        tags: [html(), css(), javascript()],
      },
      links: [github({ url: 'https://github.com/flonkita/Pixel-Art' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
