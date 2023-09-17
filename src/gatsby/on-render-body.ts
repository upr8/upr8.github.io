import { RenderBodyArgs } from "gatsby";
import { newrelicHeadScript } from "./plugins/newrelic/newrelic";

const HtmlAttributes = {
	lang: "en",
	dir: "ltr",
};

const BodyAttributes = {
	className: "body-theme-light bg-body body-lang-english font-body bidi-en",
};

const onRenderBody = ({
	setHeadComponents,
	setHtmlAttributes,
	setBodyAttributes,
}: RenderBodyArgs) => {
	setHeadComponents([newrelicHeadScript()]);
	setHtmlAttributes(HtmlAttributes);
	setBodyAttributes(BodyAttributes);
};

export { onRenderBody };
