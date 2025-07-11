// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://documentation.necrozmalabs.com',
	base: '',
	integrations: [
		starlight({
			title: 'Open Research Laboratory',
			social: [{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/necrozmalabs' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
				{
					label:'Report an Issue',
					link:'/report-issue'
				}
				
			],
		}),
	],
	markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
	output: "static"
});
