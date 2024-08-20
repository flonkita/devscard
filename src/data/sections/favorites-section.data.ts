import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'Mes favoris',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  videos: {
    title: 'Vidéos que je recommande',
    data: [
      {
        image: import('@/assets/favorites/videos/burnout.jpg'),
        title: 'Burnout as a programmer',
        url: 'https://www.youtube.com/watch?v=F8iITIGHbaQ',
      },
      {
        image: import('@/assets/favorites/videos/astro-100.jpeg'),
        title: 'Astro in 100 Seconds',
        url: 'https://www.youtube.com/watch?v=dsTXcSeAZq8',
      },
      {
        image: import('@/assets/favorites/videos/vs-updates-2024.jpeg'),
        title: 'Top VS Code Updates over the Past Year | Tips & Tricks 2024 (Visual Studio Code)',
        url: 'https://youtu.be/QyJZzq0v7Z4',
      },
    ],
  },
  medias: {
    title: 'Médias que je suis',
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'Chaîne YouTube',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/logo-laconsole.jpeg'),
        title: 'La Console',
        type: 'Site web',
        url: 'https://laconsole.dev/',
      },
      {
        image: import('@/assets/favorites/media/logo-aurelearn.jpeg'),
        title: 'Aurelearn',
        type: 'Site web',
        url: 'https://learn.aureldvx.fr/',
      },
      {
        image: import('@/assets/favorites/media/logo-grafikart.png'),
        title: 'Grafikart',
        type: 'Chaîne YouTube',
        url: 'https://www.youtube.com/@grafikart',
      },
      {
        image: import('@/assets/favorites/media/lior-chamla.jpg'),
        title: 'Lior Chamla',
        type: 'Chaîne YouTube',
        url: 'https://www.youtube.com/@LiorCHAMLA',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog',
        url: 'https://cult.honeypot.io/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
