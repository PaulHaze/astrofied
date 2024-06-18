import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';

// import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
	site: 'https://astrofied.pages.dev/',
	integrations: [sitemap(), tailwind(), react(), icon()],
	output: 'static',
	// adapter: cloudflare({
	// 	imageService: 'passthrough',
	// }),
});
