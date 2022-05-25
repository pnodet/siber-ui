/* eslint-disable unicorn/prefer-module */
const withSiber = require('./src/utils/with-siber.js');

const config = {
	content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};

module.exports = withSiber(config);
