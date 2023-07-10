import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],
};

export default config;
