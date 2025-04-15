import type { Thing } from 'schema-dts';

export interface OpenGraphProps {
  title?: string;
  description?: string;
  type?: 'website' | 'article' | 'profile' | 'book';
  image?: string;
  url?: string;
  siteName?: string;
  locale?: string;
}

export interface TwitterCardProps {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
}

export interface RobotsProps {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
  maxVideoPreview?: number;
}

export interface SEOProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: OpenGraphProps;
  twitter?: TwitterCardProps;
  jsonLd?: Thing | Thing[];
  robots?: RobotsProps;
  additionalMetaTags?: Array<{ name: string; content: string }>;
  additionalLinkTags?: Array<{ rel: string; href: string }>;
} 