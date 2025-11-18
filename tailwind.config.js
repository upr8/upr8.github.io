/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./data/**/*.{js,jsx,ts,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				body: "var(--font-body)",
			},
			backgroundColor: {
				body: "var(--color-bg-body)",
				nav: "var(--color-bg-nav)",
				bq: "var(--color-bg-bq)",
				table: {
					head: "var(--color-bg-table-head)",
					even: "var(--color-bg-table-even)",
					odd: "var(--color-bg-table-odd)",
				},
			},
			borderColor: {
				primary: "var(--color-border-primary)",
				secondary: "var(--color-border-secondary)",
				table: "var(--color-border-table)",
			},
			textColor: {
				primary: "var(--color-text-primary)",
				secondary: "var(--color-text-secondary)",
				accent: {
					primary: "var(--color-link-primary)",
					hover: "var(--color-link-hover)",
					active: "var(--color-link-active)",
					visited: "var(--color-link-visited)",
				},
			},
			textDecorationColor: {
				accent: {
					primary: "var(--color-link-primary)",
					hover: "var(--color-link-hover)",
				},
			},
			ringColor: {
				accent: {
					primary: "var(--color-link-primary)",
				},
			},
			ringOffsetColor: {
				body: "var(--color-bg-body)",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
