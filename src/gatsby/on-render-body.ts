import React from "react";
import type { RenderBodyArgs } from "gatsby";
import { newrelicHeadScript } from "./plugins/newrelic/newrelic";

const HtmlAttributes = {
	lang: "en",
	dir: "ltr",
};

const BodyAttributes = {
	className: "bg-body body-lang-english font-body bidi-en",
};

// Critical CSS to inline for faster LCP
const criticalCSS = () => {
	const css = `
		body {
			margin: 0;
			padding: 0;
			text-rendering: optimizeSpeed;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
		p {
			line-height: 1.625;
			contain: layout style;
		}
	`;
	return React.createElement("style", {
		key: "critical-css",
		dangerouslySetInnerHTML: { __html: css },
	});
};

// Inline script to prevent FOUC by setting theme before page renders
const themeScript = () => {
	const script = `
		(function() {
			function getTheme() {
				var stored = localStorage.getItem('theme');
				if (stored === 'dark' || stored === 'light') {
					return stored;
				}
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					return 'dark';
				}
				return 'light';
			}
			var theme = getTheme();
			document.body.classList.add('body-theme-' + theme);
			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			}
		})();
	`;
	return React.createElement("script", {
		key: "theme-script",
		dangerouslySetInnerHTML: { __html: script },
	});
};

const onRenderBody = ({
	setHeadComponents,
	setHtmlAttributes,
	setBodyAttributes,
	setPreBodyComponents,
}: RenderBodyArgs) => {
	setHeadComponents([criticalCSS(), newrelicHeadScript()]);
	setHtmlAttributes(HtmlAttributes);
	setBodyAttributes(BodyAttributes);
	setPreBodyComponents([themeScript()]);
};

export { onRenderBody };
