import React, { type FC } from "react";

import { SiteContext, Theme, toggleTheme } from "@/states";
import { toggleDot } from "./theme-switcher.module.css";

const ThemeSwitcher: FC = () => {
	const { state, dispatch } = React.useContext(SiteContext);

	return (
		<label
			htmlFor="toggleTheme"
			className="relative flex items-center justify-center pt-1 cursor-pointer"
			aria-label={`Switch to ${state.theme === Theme.Light ? "dark" : "light"} theme`}
		>
			<input
				id="toggleTheme"
				type="checkbox"
				className="hidden"
				onClick={() => dispatch(toggleTheme())}
				checked={state.theme === Theme.Dark}
				readOnly
				aria-label={`Theme switcher, currently ${state.theme === Theme.Light ? "light" : "dark"} mode`}
			/>
			<div className="w-10 h-4 rounded-full shadow-inner bg-body" aria-hidden="true" />
			<div
				className={`${toggleDot} absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0 flex items-center justify-center`}
				aria-hidden="true"
			>
				<span className={`${state.theme === Theme.Light ? "" : "hidden"}`}>
					<svg
						className="w-3 h-3 text-yellow-800 fill-current"
						viewBox="0 0 2267 2267"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						focusable="false"
					>
						<title>Sun icon for light theme</title>
						<path d="M0 1133q0-39 27-66 28-26 64-26h218q37 0 61.5 27t24.5 65-24.5 64.5T309 1224H91q-37 0-64-27t-27-64zm305 739q0-37 25-65l157-152q24-25 63-25 38 0 63.5 24t25.5 61q0 39-26 68l-152 152q-65 51-131 0-25-27-25-63zm0-1477q0-37 25-65 31-26 68-26 35 0 63 26l152 157q26 24 26 63 0 38-25.5 63.5T550 639q-39 0-63-26L330 461q-25-27-25-66zm272 738q0-149 75-277.5T855.5 652t277.5-75q112 0 215 44.5t177.5 119T1644 918t44 215q0 150-74.5 278T1411 1613.5t-278 74.5-278-74.5T652 1411t-75-278zm181 0q0 156 109.5 266.5T1133 1510t266.5-110.5T1510 1133q0-154-110.5-263T1133 761q-155 0-265 109t-110 263zm284 829q0-38 26.5-64t64.5-26q39 0 65 26t26 64v212q0 39-26.5 66t-64.5 27-64.5-27-26.5-66v-212zm0-1653V91q0-37 27-64t64-27 64 27 27 64v218q0 37-26.5 61.5T1133 395t-64.5-24.5T1042 309zm589 1406q0-37 24-60 24-25 60-25 39 0 64 25l156 152q26 28 26 65t-26 63q-64 50-128 0l-152-152q-24-27-24-68zm0-1165q0-40 24-63l152-157q28-26 63-26 38 0 64.5 27t26.5 64q0 40-26 66l-156 152q-29 26-64 26-36 0-60-25.5t-24-63.5zm241 583q0-38 26-66 26-26 61-26h216q37 0 64.5 27.5t27.5 64.5-27.5 64-64.5 27h-216q-37 0-62-26.5t-25-64.5z" />
					</svg>
				</span>
				<span className={`${state.theme === Theme.Dark ? "" : "hidden"}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="w-3 h-3 text-gray-700 fill-current"
						aria-hidden="true"
						focusable="false"
					>
						<title>Moon icon for dark theme</title>
						<path
							className="heroicon-ui"
							d="M9.57 3.38a8 8 0 0 0 10.4 10.4 1 1 0 0 1 1.31 1.3 10 10 0 1 1-13-13 1 1 0 0 1 1.3 1.3zM7.1 5.04A8 8 0 1 0 18.3 16.27 10 10 0 0 1 7.08 5.04z"
						/>
					</svg>
				</span>
			</div>
		</label>
	);
};

export default ThemeSwitcher;
