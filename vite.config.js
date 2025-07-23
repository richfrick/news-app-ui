import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    include: ['__tests__/*.test.jsx'],
    exclude: ['e2e', 'tests', 'playwright', 'node_modules'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './testSetup.js',
    css: true,
  },
});
