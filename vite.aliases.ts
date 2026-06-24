import { fileURLToPath } from 'node:url';

export const aliases = {
  assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
  components: fileURLToPath(new URL('./src/components', import.meta.url)),
  features: fileURLToPath(new URL('./src/features', import.meta.url)),
  i18n: fileURLToPath(new URL('./src/i18n', import.meta.url)),
  pages: fileURLToPath(new URL('./src/pages', import.meta.url)),
};
