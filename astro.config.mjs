import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: './dist',
  build: {
    format: 'file',
    target: 'node18'
  }
});