import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				green: {
                         50: '#ebf9f3',
                         100: '#e1f5ed',
                         200: '#c0ebd9',
                         300: '#35bf84',
                         400: '#30ac77',
                         500: '#2a996a',
                         600: '#288f63',
                         700: '#20734f',
                         800: '#18563b',
                         900: '#13432e',
                    },
			}
		},
	},
	plugins: [],
}

export default config;