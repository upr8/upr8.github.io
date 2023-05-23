import * as React from "react";

interface Props {
	children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
	return (
		<main className="box-border min-w-0 m-0 leading-normal tracking-normal">
			{children}
		</main>
	);
};

export default Main;
