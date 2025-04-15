
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteMockServe } from 'vite-plugin-mock';
//import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    //tailwindcss(),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
    }),
  ],
});

