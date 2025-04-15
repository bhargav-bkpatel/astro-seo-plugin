import type { AstroIntegration } from 'astro';

interface SeoEnhancerOptions {
  defaultTitle?: string;
  defaultDescription?: string;
  siteName?: string;
  siteUrl?: string;
  defaultImage?: string;
  locale?: string;
}

declare global {
  var seoEnhancerOptions: SeoEnhancerOptions;
}

function seoEnhancer(options: SeoEnhancerOptions = {}): AstroIntegration {
  return {
    name: 'astro-seo-enhancer',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        globalThis.seoEnhancerOptions = options;
      },
    },
  };
}

// Re-export types
export type { SEOProps, OpenGraphProps, TwitterCardProps, RobotsProps } from './types/index.ts';

// Re-export the SEO component
export { default as SEO } from './components/SEO.astro';

export default seoEnhancer; 