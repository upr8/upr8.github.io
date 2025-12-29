import { useState, useEffect } from "react";

export const useReadingProgress = (): number => {
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

	return progress;
};
