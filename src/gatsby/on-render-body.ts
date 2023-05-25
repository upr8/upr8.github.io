import { RenderBodyArgs } from "gatsby";

const HtmlAttributes = {
	lang: "en",
	dir: "ltr",
};

const BodyAttributes = {
	className: "body-theme-light bg-body body-lang-english font-body",
};

const onRenderBody = ({
	setHtmlAttributes,
	setBodyAttributes,
}: RenderBodyArgs) => {
	setHtmlAttributes(HtmlAttributes);
	setBodyAttributes(BodyAttributes);
};

export { onRenderBody };
