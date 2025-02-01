import flowbitePlugin from 'flowbite/plugin';

import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#FFF7E5',
					100: '#FFEDBF',
					200: '#FFDF8C',
					300: '#FFD159',
					400: '#FFC52F',
					500: '#FFBA15',
					600: '#E6A610',
					700: '#FFBC0D',
					800: '#CC9109',
					900: '#996B06'
				}
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;
