/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				baseImg: "url('./img/layer-base.png')",
				frontImg: "url('./img/layer-front.png')",
				middleImg: "url('./img/layer-middle.png')",
				dungeonImg: "url('./img/dungeon.jpg')",
				layerBg: "url('./img/layer-2.png')",
			}),
			fontFamily: {
				satisfy: ["Satisfy", "cursive"],
			},
		},
	},
	plugins: [],
});
