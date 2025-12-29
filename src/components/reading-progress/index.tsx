import React, { useState, useEffect, type FC } from "react";

const ReadingProgress: FC = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight;
			const winHeight = window.innerHeight;
			const scrollable = docHeight - winHeight;

			if (scrollable > 0) {
				setProgress((scrollTop / scrollable) * 100);
			}
		};

		window.addEventListener("scroll", updateProgress, { passive: true });
		updateProgress();

		return () => window.removeEventListener("scroll", updateProgress);
	}, []);

	return (
		<div
			className="fixed top-0 left-0 h-1 z-50 bg-accent-primary transition-[width] duration-150"
			style={{ width: `${progress}%` }}
			role="progressbar"
			aria-valuenow={Math.round(progress)}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label="Reading progress"
		/>
	);
};

export default ReadingProgress;
