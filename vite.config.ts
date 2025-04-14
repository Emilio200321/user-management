
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
    }),
  ],
});

