import * as React from "react";
import { Link } from "gatsby";
import CodeWithHighlight from "./code";
import A from "./a";

export const mdxShortCodes = {
	// Short codes
	Link,
	// HTML elements
	a: A,
	code: CodeWithHighlight,
	em: (props: React.PropsWithChildren) => <em className="italic" {...props} />,
	p: (props: React.PropsWithChildren) => (
		<p className="pt-4 leading-relaxed text-justify indent-4" {...props} />
	),
	strong: (props: React.PropsWithChildren) => (
		<strong className="font-bold" {...props} />
	),
	h2: (props: React.PropsWithChildren) => (
		<h2 className="pt-6 text-3xl font-semibold" {...props} />
	),
	h3: (props: React.PropsWithChildren) => (
		<h3 className="pt-5 text-2xl font-semibold" {...props} />
	),
	h4: (props: React.PropsWithChildren) => (
		<h4 className="pt-5 text-xl font-semibold" {...props} />
	),
	h5: (props: React.PropsWithChildren) => (
		<h4 className="pt-4 text-lg font-semibold" {...props} />
	),
	ol: (props: React.PropsWithChildren) => (
		<ol className="text-justify list-decimal ps-10 indent-2" {...props} />
	),
	ul: (props: React.PropsWithChildren) => (
		<ul className="text-justify list-disc ps-10 indent-2" {...props} />
	),
	hr: (props: React.PropsWithChildren) => (
		<hr
			className="h-px mx-4 my-8 bg-gray-300 border-0 dark:bg-gray-600"
			{...props}
		/>
	),
};
