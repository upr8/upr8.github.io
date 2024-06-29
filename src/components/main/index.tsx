import React, { type FC, type ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const Main: FC<Props> = ({ children }) => {
	return (
		<main className="box-border min-w-0 m-0 leading-normal tracking-normal">
			{children}
		</main>
	);
};

export default Main;
