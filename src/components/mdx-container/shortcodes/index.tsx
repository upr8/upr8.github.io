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
		<p className="pt-4 leading-relaxed text-justify indent-4" {...props} />
	),
	strong: (props: PropsWithChildren) => (
		<strong className="font-bold" {...props} />
	),
	h2: (props: PropsWithChildren) => (
		<h2 className="pt-6 text-3xl font-semibold" {...props} />
	),
	h3: (props: PropsWithChildren) => (
		<h3 className="pt-5 text-2xl font-semibold" {...props} />
	),
	h4: (props: PropsWithChildren) => (
		<h4 className="pt-5 text-xl font-semibold" {...props} />
	),
	h5: (props: PropsWithChildren) => (
		<h4 className="pt-4 text-lg font-semibold" {...props} />
	),
	ol: (props: PropsWithChildren) => (
		<ol className="text-justify list-decimal ps-10 indent-2" {...props} />
	),
	ul: (props: PropsWithChildren) => (
		<ul className="text-justify list-disc ps-10 indent-2" {...props} />
	),
	hr: (props: PropsWithChildren) => (
		<hr
			className="h-px mx-4 my-8 bg-gray-300 border-0 dark:bg-gray-600"
			{...props}
		/>
	),
};
