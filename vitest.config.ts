import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

import { aliases } from './vite.aliases.ts';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: [
        'src/main.tsx',
        'src/vite-env.d.ts',
        '**/index.ts',
        '**/*.d.ts',
        'src/test/**',
        'vite.config.ts',
        'vitest.config.ts',
        'old/**',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
