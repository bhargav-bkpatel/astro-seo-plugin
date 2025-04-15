# Astro SEO Enhancer

A powerful SEO enhancement plugin for Astro websites that provides:

- ✨ Meta tags management
- 🔍 JSON-LD structured data
- 🤖 robots.txt generation
- 🗺️ Sitemap support
- 🎯 OpenGraph and Twitter card optimization

## Installation

```bash
npm install astro-seo-enhancer
```

## Usage

```astro
---
import { SEO } from 'astro-seo-enhancer';
---

<SEO
  title="Your Page Title"
  description="Your page description"
  openGraph={{
    title: "OG Title",
    description: "OG Description",
    image: "https://example.com/og-image.jpg",
    type: "website"
  }}
  twitter={{
    card: "summary_large_image",
    site: "@yourusername",
    creator: "@yourusername"
  }}
  jsonLd={{
    "@type": "WebPage",
    name: "Your Page Name",
    description: "Your page description"
  }}
/>
```

## Features

### Meta Tags
- Automatically generates essential meta tags
- Customizable meta tag options
- Support for canonical URLs

### JSON-LD
- Structured data support
- Multiple schema types
- Automatic schema validation

### OpenGraph & Twitter Cards
- Complete social media optimization
- Custom image support
- Flexible card types

### Additional Features
- Robots.txt generation
- Sitemap support
- Performance optimization

## Configuration

You can configure the plugin in your `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import seoEnhancer from 'astro-seo-enhancer';

export default defineConfig({
  integrations: [
    seoEnhancer({
      defaultTitle: 'Your Site Name',
      defaultDescription: 'Your site description',
      siteName: 'Your Site Name',
      siteUrl: 'https://yoursite.com',
      defaultImage: '/default-og-image.jpg',
      locale: 'en_US',
    })
  ]
});
```

## License

MIT

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
