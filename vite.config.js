import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vitest/config';

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

export default config
