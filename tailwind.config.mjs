/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/src/assets/hero.png')"
			},
			fontSize: {
				'2.5xl': '1.75rem'
			},
			colors: {
				charcoal: '#0E0F0C',
				leaf: '#17681F'
			},
			spacing: {
				120: '30rem',
				128: '32rem'
			}
		}
	},
	plugins: []
};
