![Alt Text](https://github.com/bhargav-bkpatel/astro-seo-plugin/blob/main/public/background.webp)

# ⚡Astro SEO Plugin

[![npm version](https://img.shields.io/badge/npm-v9.3.1-blue)](https://www.npmjs.com/package/astro-seo-plugin)
[![npm downloads](https://img.shields.io/badge/downloads-20k-brightgreen)](https://www.npmjs.com/package/astro-seo-plugin)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://www.typescriptlang.org/)
[![Built with Astro](https://img.shields.io/badge/Built%20With-Astro-8a2be2?logo=astro&logoColor=white)](https://astro.build/)

A powerful and well-tested Astro SEO optimization plugin designed for Astro-based websites improves productivity, helps search engines find sites more , and assists developers in getting their sites to rank better. It achieves this through clever analytics and by handling metadata. This plugin provides developers with the necessary tools, and it supports both Astro 4 and Astro 5 making sure it works with the newest versions and stays compatible with up-to-date Astro features.

- ✨ Meta tags management
- 🔍 JSON-LD structured data
- 🤖 robots.txt generation
- 🗺️ Sitemap support
- 🎯 OpenGraph and Twitter card optimization

## 📥 Installation

```bash
npm install astro-seo-plugin
```

## 💻 Usage

To add valuable SEO tags to your Astro pages, import the ```<AstroSEO>``` component from astro-seo-plugin, and use it in the  area of your layout or page. Set options for metadata, structured data, and robot settings to increase the visibility of your site in search engine results.

```astro
---
import { AstroSEO } from 'astro-seo-plugin';
---

<AstroSEO
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
  robots={{
    index: false,
    follow: true,
    noarchive: true,
    nosnippet: true,
    maxSnippet: 150,
  }}
  additionalLinkTags={[
    { rel: "canonical", href: "#" },
    { rel: "prev", href: Astro.url },
    { rel: "next", href: Astro.url },
    { rel: "alternate", href: Astro.url }
  ]}
  additionalMetaTags={[
    {
    name: "keywords",
    content: "your, keywords, here, separated, by, commas"
    }
  ]}
/>
```

## 📝 Supported Props

<table>
  <tr>
    <th>Prop Path</th>
    <th>Type</th>
    <th>Description</th>
    <th>Possible Values/Structure</th>
  </tr>
  <tr>
    <th colspan="4"><strong>Basic SEO Properties</strong></th>
  </tr>
  <tr>
    <td>title</td>
    <td>string</td>
    <td>Main page title</td>
    <td>Any text</td>
  </tr>
  <tr>
    <td>titleTemplate</td>
    <td>string</td>
    <td>Template for title</td>
    <td>Format with %s (e.g., "%s | My Site")</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td>Meta description</td>
    <td>Any text</td>
  </tr>
  <tr>
    <td>canonical</td>
    <td>string</td>
    <td>Canonical URL</td>
    <td>Full URL</td>
  </tr>
  <tr>
    <td>noindex</td>
    <td>boolean</td>
    <td>Prevents search engine indexing</td>
    <td>true/false</td>
  </tr>
  <tr>
    <td>nofollow</td>
    <td>boolean</td>
    <td>Prevents search engine link following</td>
    <td>true/false</td>
  </tr>
  <tr>
    <th colspan="4"><strong>Open Graph Properties</strong></th>
  </tr>
  <tr>
    <td>openGraph.title</td>
    <td>string</td>
    <td>OG title</td>
    <td>Any text</td>
  </tr>
  <tr>
    <td>openGraph.description</td>
    <td>string</td>
    <td>OG description</td>
    <td>Any text</td>
  </tr>
  <tr>
    <td>openGraph.type</td>
    <td>string</td>
    <td>OG content type</td>
    <td>website, article, product, etc.</td>
  </tr>
  <tr>
    <td>openGraph.image</td>
    <td>string</td>
    <td>OG image URL</td>
    <td>Full URL</td>
  </tr>
  <tr>
    <td>openGraph.url</td>
    <td>string</td>
    <td>OG URL</td>
    <td>Full URL</td>
  </tr>
  <tr>
    <td>openGraph.siteName</td>
    <td>string</td>
    <td>OG site name</td>
    <td>Any text</td>
  </tr>
  <tr>
    <td>openGraph.locale</td>
    <td>string</td>
    <td>OG locale</td>
    <td>e.g., en_US, es_ES</td>
  </tr>
  <tr>
    <th colspan="4"><strong>Twitter Card Properties</strong></th>
  </tr>
  <tr>
    <td>twitter.card</td>
    <td>string</td>
    <td>Twitter card type</td>
    <td>summary, summary_large_image, app, player</td>
  </tr>
  <tr>
    <td>twitter.site</td>
    <td>string</td>
    <td>Website's Twitter handle</td>
    <td>@username</td>
  </tr>
  <tr>
    <td>twitter.creator</td>
    <td>string</td>
    <td>Content creator's Twitter</td>
    <td>@username</td>
  </tr>
  <tr>
    <td>twitter.title</td>
    <td>string</td>
    <td>Twitter card title</td>
    <td>Any text</td>
  </tr>
  <tr>
    <td>twitter.description</td>
    <td>string</td>
    <td>Twitter card description</td>
    <td>Any text</td>
  </tr>
  <tr>
    <td>twitter.image</td>
    <td>string</td>
    <td>Twitter card image URL</td>
    <td>Full URL</td>
  </tr>
  <tr>
    <th colspan="4"><strong>Robots Properties</strong></th>
  </tr>
  <tr>
    <td>robots.index</td>
    <td>boolean</td>
    <td>Whether to index the page</td>
    <td>true/false</td>
  </tr>
  <tr>
    <td>robots.follow</td>
    <td>boolean</td>
    <td>Whether to follow links</td>
    <td>true/false</td>
  </tr>
  <tr>
    <td>robots.noarchive</td>
    <td>boolean</td>
    <td>Prevents page caching</td>
    <td>true/false</td>
  </tr>
  <tr>
    <td>robots.nosnippet</td>
    <td>boolean</td>
    <td>Prevents snippet generation</td>
    <td>true/false</td>
  </tr>
  <tr>
    <td>robots.maxSnippet</td>
    <td>number</td>
    <td>Maximum snippet length</td>
    <td>Number of characters</td>
  </tr>
  <tr>
    <td>robots.maxImagePreview</td>
    <td>string</td>
    <td>Maximum image preview size</td>
    <td>none, standard, large</td>
  </tr>
  <tr>
    <td>robots.maxVideoPreview</td>
    <td>number</td>
    <td>Maximum video preview length</td>
    <td>Number of seconds</td>
  </tr>
  <tr>
    <th colspan="4"><strong>Additional Meta Tags Structure</strong></th>
  </tr>
  <tr>
    <td>additionalMetaTags</td>
    <td>array</td>
    <td>Array of meta tag objects</td>
    <td>Array of objects with following properties:</td>
  </tr>
  <tr>
    <td>additionalMetaTags[].name</td>
    <td>string</td>
    <td>Meta tag name</td>
    <td>Common examples:<br>- viewport<br>- theme-color<br>- format-detection<br>- apple-mobile-web-app-capable<br>- application-name<br>- author<br>- keywords</td>
  </tr>
  <tr>
    <td>additionalMetaTags[].content</td>
    <td>string</td>
    <td>Meta tag content</td>
    <td>Corresponding values</td>
  </tr>
  <tr>
    <td>additionalMetaTags[].property</td>
    <td>string</td>
    <td>Meta tag property (alternative to name)</td>
    <td>Custom properties</td>
  </tr>
  <tr>
    <td>additionalMetaTags[].httpEquiv</td>
    <td>string</td>
    <td>HTTP-equiv attribute</td>
    <td>content-type, default-style, refresh</td>
  </tr>
  <tr>
    <th colspan="4"><strong>Additional Link Tags Structure</strong></th>
  </tr>
  <tr>
    <td>additionalLinkTags</td>
    <td>array</td>
    <td>Array of link tag objects</td>
    <td>Array of objects with following properties:</td>
  </tr>
  <tr>
    <td>additionalLinkTags[].rel</td>
    <td>string</td>
    <td>Link relationship</td>
    <td>Common values:<br>- icon<br>- apple-touch-icon<br>- manifest<br>- preload<br>- preconnect<br>- dns-prefetch<br>- alternate</td>
  </tr>
  <tr>
    <td>additionalLinkTags[].href</td>
    <td>string</td>
    <td>Link URL</td>
    <td>Full URL or path</td>
  </tr>
  <tr>
    <td>additionalLinkTags[].sizes</td>
    <td>string</td>
    <td>Icon sizes</td>
    <td>e.g., 16x16, 32x32, 180x180</td>
  </tr>
  <tr>
    <td>additionalLinkTags[].type</td>
    <td>string</td>
    <td>MIME type</td>
    <td>e.g., image/png, image/x-icon</td>
  </tr>
  <tr>
    <td>additionalLinkTags[].media</td>
    <td>string</td>
    <td>Media query</td>
    <td>e.g., (prefers-color-scheme: dark)</td>
  </tr>
  <tr>
    <td>additionalLinkTags[].hreflang</td>
    <td>string</td>
    <td>Language of linked resource</td>
    <td>e.g., en-US, es</td>
  </tr>
  <tr>
    <td>additionalLinkTags[].crossOrigin</td>
    <td>string</td>
    <td>CORS setting</td>
    <td>anonymous, use-credentials</td>
  </tr>
  <tr>
    <th colspan="4"><strong>JSON-LD</strong></th>
  </tr>
  <tr>
    <td>jsonLd</td>
    <td>object</td>
    <td>Structured data object</td>
    <td>Valid JSON-LD object</td>
  </tr>
</table>

## 📦 Quick Start & Development

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

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

## 💼 Explore my personal work and projects:

Visit my portfolio at [Bhargav Patel](https://bkpatel.com/) to explore my work, projects, and what I’ve been building lately.

## 🪪 License

MIT
