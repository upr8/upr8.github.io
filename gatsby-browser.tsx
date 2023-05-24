import "./src/styles/global.css";
import React from "react";
import WrapGatsbyPage from "./src/components/wrap-gatsby-page";

export const wrapPageElement = ({ element, props }) => (
	<WrapGatsbyPage {...props}>{element}</WrapGatsbyPage>
);
