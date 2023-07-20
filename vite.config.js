import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      manifest: {      
        "name": "Learn Spanish",
        "short_name": "Learn Spanish",
        "theme_color": "#AD1519",
        "background_color": "#FABD00",    
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "id": "/",
        "icons": [
          {
            "src": "icon-48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "icon-72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "icon-96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "icon-128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "icon-144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "icon-152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "icon-384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]        
      },
      injectManifest: {
        globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
      },
      workbox: {
        globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
      },
    })
  ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config