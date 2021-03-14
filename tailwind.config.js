module.exports = {
	purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: "#202124",
				light: "#fcfcfc",
			},
		},
	},
	variants: {
		extend: {
			display: ["dark"],
		},
	},
	plugins: [],
};
