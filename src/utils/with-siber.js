/* eslint-disable unicorn/prefer-module */
const merge = require('deepmerge');
const shadows = require('../theme/shadows');
const colors = require('../theme/colors');

const colorSaveList = [];
const extendeColors = {};

/* eslint-disable-next-line guard-for-in */
for (const key in colors) {
	extendeColors[key] = colors[key];
	for (const colorValue of [100, 200, 300, 400, 500, 600, 700, 800, 900]) {
		colorSaveList.push(
			`text-${key}-${colorValue}`,
			`bg-${key}-${colorValue}`,
			`border-${key}-${colorValue}`,
			`ring-${key}-${colorValue}`,
			`focus:ring-${key}-${colorValue}`,
			`hover:text-${key}-${colorValue}`,
			`hover:bg-${key}-${colorValue}`,
			`hover:border-${key}-${colorValue}`,
		);
	}
}

const siberConfig = {
	content: ['./node_modules/siber-ui/components/**/*.{js,ts,jsx,tsx}'],
	safelist: colorSaveList,
	theme: {
		boxShadow: shadows,
		extend: {
			colors: extendeColors,
		},
	},

	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

/**
 * Merge siber-ui and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function withSiber(tailwindConfig) {
	return merge(siberConfig, {...tailwindConfig});
}

module.exports = withSiber;
