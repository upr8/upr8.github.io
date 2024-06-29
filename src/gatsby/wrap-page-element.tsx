import * as React from "react";
import type { WrapPageElementBrowserArgs } from "gatsby";

import WrapGatsbyPage from "@/components/wrap-gatsby-page";

const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => (
	<WrapGatsbyPage {...props}>{element}</WrapGatsbyPage>
);

export { wrapPageElement };
