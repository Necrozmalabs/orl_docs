// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://necrozmalabs.github.io/orl_docs/',
	integrations: [
		starlight({
			title: 'Necrozma Open Research Laboratory',
			social: [{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/necrozmalabs' }],
			sidebar: [
				
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				
			],
		}),
	],
});
