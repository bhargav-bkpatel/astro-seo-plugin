import type { OpenGraphProps, TwitterCardProps, RobotsProps } from '../types';

export const generateMetaTags = (
  title: string,
  description?: string,
  canonical?: string,
  noindex?: boolean,
  nofollow?: boolean
): Array<{ name: string; content: string } | { property: string; content: string }> => {
  const tags = [];

  if (title) {
    tags.push({ name: 'title', content: title });
  }

  if (description) {
    tags.push({ name: 'description', content: description });
  }

  if (noindex || nofollow) {
    const robotsContent = [
      noindex ? 'noindex' : 'index',
      nofollow ? 'nofollow' : 'follow'
    ].join(', ');
    tags.push({ name: 'robots', content: robotsContent });
  }

  return tags;
};

export const generateOpenGraphTags = (og: OpenGraphProps): Array<{ property: string; content: string }> => {
  const tags = [];

  if (og.title) tags.push({ property: 'og:title', content: og.title });
  if (og.description) tags.push({ property: 'og:description', content: og.description });
  if (og.type) tags.push({ property: 'og:type', content: og.type });
  if (og.image) tags.push({ property: 'og:image', content: og.image });
  if (og.url) tags.push({ property: 'og:url', content: og.url });
  if (og.siteName) tags.push({ property: 'og:site_name', content: og.siteName });
  if (og.locale) tags.push({ property: 'og:locale', content: og.locale });

  return tags;
};

export const generateTwitterTags = (twitter: TwitterCardProps): Array<{ name: string; content: string }> => {
  const tags = [];

  if (twitter.card) tags.push({ name: 'twitter:card', content: twitter.card });
  if (twitter.site) tags.push({ name: 'twitter:site', content: twitter.site });
  if (twitter.creator) tags.push({ name: 'twitter:creator', content: twitter.creator });
  if (twitter.title) tags.push({ name: 'twitter:title', content: twitter.title });
  if (twitter.description) tags.push({ name: 'twitter:description', content: twitter.description });
  if (twitter.image) tags.push({ name: 'twitter:image', content: twitter.image });

  return tags;
};

export const generateRobotsContent = (robots: RobotsProps): string => {
  const directives = [];

  if (robots.index !== undefined) directives.push(robots.index ? 'index' : 'noindex');
  if (robots.follow !== undefined) directives.push(robots.follow ? 'follow' : 'nofollow');
  if (robots.noarchive) directives.push('noarchive');
  if (robots.nosnippet) directives.push('nosnippet');
  if (robots.maxSnippet !== undefined) directives.push(`max-snippet:${robots.maxSnippet}`);
  if (robots.maxImagePreview) directives.push(`max-image-preview:${robots.maxImagePreview}`);
  if (robots.maxVideoPreview !== undefined) directives.push(`max-video-preview:${robots.maxVideoPreview}`);

  return directives.join(', ');
}; 