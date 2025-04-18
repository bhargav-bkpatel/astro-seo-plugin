import { describe, it, expect } from 'vitest';
import { generateMetaTags, generateOpenGraphTags, generateTwitterTags, generateRobotsContent } from '../utils/seo';
import type { OpenGraphProps, TwitterCardProps, RobotsProps } from '../types';

describe('SEO Utils', () => {
  describe('generateMetaTags', () => {
    it('should generate basic meta tags', () => {
      const tags = generateMetaTags('Test Title', 'Test Description');
      expect(tags).toContainEqual({ name: 'title', content: 'Test Title' });
      expect(tags).toContainEqual({ name: 'description', content: 'Test Description' });
    });

    it('should handle noindex and nofollow', () => {
      const tags = generateMetaTags('Test', undefined, undefined, true, true);
      expect(tags).toContainEqual({ name: 'robots', content: 'noindex, nofollow' });
    });
  });

  describe('generateOpenGraphTags', () => {
    it('should generate OpenGraph tags', () => {
      const og: OpenGraphProps = {
        title: 'OG Title',
        description: 'OG Description',
        type: 'website',
        image: 'https://example.com/image.jpg'
      };
      const tags = generateOpenGraphTags(og);
      expect(tags).toContainEqual({ property: 'og:title', content: 'OG Title' });
      expect(tags).toContainEqual({ property: 'og:description', content: 'OG Description' });
      expect(tags).toContainEqual({ property: 'og:type', content: 'website' });
      expect(tags).toContainEqual({ property: 'og:image', content: 'https://example.com/image.jpg' });
    });
  });

  describe('generateTwitterTags', () => {
    it('should generate Twitter card tags', () => {
      const twitter: TwitterCardProps = {
        card: 'summary_large_image',
        site: '@testsite',
        title: 'Twitter Title'
      };
      const tags = generateTwitterTags(twitter);
      expect(tags).toContainEqual({ name: 'twitter:card', content: 'summary_large_image' });
      expect(tags).toContainEqual({ name: 'twitter:site', content: '@testsite' });
      expect(tags).toContainEqual({ name: 'twitter:title', content: 'Twitter Title' });
    });
  });

  describe('generateRobotsContent', () => {
    it('should generate robots directives', () => {
      const robots: RobotsProps = {
        index: true,
        follow: false,
        noarchive: true,
        maxSnippet: 150
      };
      const content = generateRobotsContent(robots);
      expect(content).toBe('index, nofollow, noarchive, max-snippet:150');
    });
  });
}); 