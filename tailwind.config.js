/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./public/index.html'
	],
  theme: {
    extend: {
			colors: {
				red: '#ff0000',
				bakerloo: '#894E24',
				central: '#DC241F',
				circle: '#FFCE00',
				district: '#007229',
				'hammersmith-city': '#D799AF',
				jubilee: '#6A7278',
				metropolitan: '#710851',
				northern: '#000',
				piccadilly: '#0019A8',
				victoria: '#C1E8F8',
				'waterloo-city': '#76D0BD'
			},
		},
  },
  plugins: [],
	safelist: [
		{
			pattern: /(bg|text|border)-(bakerloo|central|circle|district|hammersmith-city|jubilee|metropolitan|northern|piccadilly|victoria|waterloo-city)/
		}
	]
}

