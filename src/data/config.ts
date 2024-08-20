import type { Config } from '@/types/data';
import { fr } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: fr,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Florent Nkita - Portfolio',
    description:
      "Développeur web full-stack passionné par la création de sites web et d'applications web modernes et performantes.",
    faviconPath: '/src/assets/favicon.png',
    // ogImage: '/src/assets/og/main-icon.jpeg',
  },
  pdf: {
    footer:
      "J'accepte par la présente que mes données personnelles incluses dans ma candidature soient traitées à des fins de processus de recrutement.",
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
