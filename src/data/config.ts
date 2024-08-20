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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales ac dui at vestibulum. In condimentum metus id dui tincidunt, in blandit mi vehicula.',
    faviconPath: '/src/assets/favicon.png',
  },
  pdf: {
    footer:
      'J\'accepte par la présente que mes données personnelles incluses dans ma candidature soient traitées à des fins de processus de recrutement.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
