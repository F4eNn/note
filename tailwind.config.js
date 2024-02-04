/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts}'],
	theme: {
		extend: {
			colors: {
				lightGreen: '#93B1A6',
				green: '#5C8374',
				darkGreen: '#183D3D',
				red: '#db133c',
			},
		},
	},
	plugins: [],
};
