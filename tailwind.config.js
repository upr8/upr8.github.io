/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				body: "var(--font-body)",
			},
			backgroundColor: {
				body: "var(--color-bg-body)",
				nav: "var(--color-bg-nav)",
				bq: "var(--color-bg-bq)",
			},
			borderColor: {
				primary: "var(--color-border-primary)",
				secondary: "var(--color-border-secondary)",
			},
			textColor: {
				primary: "var(--color-text-primary)",
				secondary: "var(--color-text-secondary)",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
