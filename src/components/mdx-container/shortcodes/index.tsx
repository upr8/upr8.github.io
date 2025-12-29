import React, { type PropsWithChildren } from "react";
import { Link } from "gatsby";

import CodeWithHighlight from "./code";
import A from "./a";

export const mdxShortCodes = {
	// Short codes
	Link,
	// HTML elements
	a: A,
	code: CodeWithHighlight,
	em: (props: PropsWithChildren) => <em className="italic" {...props} />,
	p: (props: PropsWithChildren) => (
		<p className="text-xl leading-8 text-start" {...props} />
	),
	strong: (props: PropsWithChildren) => (
		<strong className="font-bold" {...props} />
	),
	h2: (props: PropsWithChildren) => (
		<h2 className="pt-3 font-sans text-2xl font-semibold" {...props} />
	),
	h3: (props: PropsWithChildren) => (
		<h3 className="pt-2 font-sans text-xl font-semibold" {...props} />
	),
	h4: (props: PropsWithChildren) => (
		<h4 className="pt-2 font-sans text-lg font-medium" {...props} />
	),
	h5: (props: PropsWithChildren) => (
		<h5 className="pt-2 font-sans text-base font-medium" {...props} />
	),
	h6: (props: PropsWithChildren) => (
		<h6 className="pt-2 font-sans text-sm font-medium uppercase tracking-wide" {...props} />
	),
	ol: (props: PropsWithChildren) => (
		<ol className="mt-4 text-start list-decimal ps-6 space-y-2" {...props} />
	),
	ul: (props: PropsWithChildren) => (
		<ul className="mt-4 text-start list-disc ps-6 space-y-2" {...props} />
	),
	hr: (props: PropsWithChildren) => (
		<hr
			className="h-px mx-2 my-4 bg-gray-300 border-0 dark:bg-gray-600"
			{...props}
		/>
	),
};
