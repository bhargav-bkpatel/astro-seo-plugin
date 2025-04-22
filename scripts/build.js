import * as esbuild from 'esbuild';
import { readFile, writeFile, mkdir, cp } from 'fs/promises';
import { join } from 'path';
import { execSync } from 'child_process';

async function build() {
  // Create dist directories
  await mkdir('dist/components', { recursive: true });
  await mkdir('dist/types', { recursive: true });

  // Copy the Astro component
  const seoComponent = await readFile('src/components/SEO.astro', 'utf-8');
  await writeFile('dist/components/SEO.astro', seoComponent, 'utf-8');

  // Copy types
  await cp('src/types', 'dist/types', { recursive: true });

  // Generate TypeScript declarations
  execSync('tsc --emitDeclarationOnly --outDir dist');

  // Build TypeScript files
  await esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node18',
    outfile: 'dist/index.js',
    external: ['astro', 'schema-dts'],
    plugins: [{
      name: 'astro',
      setup(build) {
        build.onResolve({ filter: /\.astro$/ }, args => {
          return { external: true, path: args.path }
        })
      }
    }]
  });

  // Copy package.json and README to dist
  const pkg = JSON.parse(await readFile('package.json', 'utf-8'));
  pkg.main = './index.js';
  pkg.module = './index.js';
  pkg.types = './index.d.ts';
  delete pkg.scripts;
  delete pkg.devDependencies;
  await writeFile('dist/package.json', JSON.stringify(pkg, null, 2));
  
  await cp('README.md', 'dist/README.md');

  console.log('Build completed successfully!');
}

build().catch(console.error); 