// https://raw.githubusercontent.com/gatsbyjs/gatsby/master/www/src/hooks/use-active-hash.js
// returns the id of the header in view now by using IntersectionObserver

import { useEffect, useState } from "react";

export const useActiveId = (
	itemIds: string[],
	rootMargin = undefined,
): string => {
	const [activeId, setActiveId] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				}
			},
			{ rootMargin: rootMargin || "0% 0% -80% 0%" },
		);
		for (const id of itemIds) {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		}

		return () => {
			for (const id of itemIds) {
				const element = document.getElementById(id);
				if (element) {
					observer.unobserve(element);
				}
			}
		};
	}, [itemIds, rootMargin]);

	return activeId;
};