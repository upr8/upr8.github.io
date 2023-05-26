export const setLocalStorage = ({
	key,
	value,
}: { key: string; value: string }) => {
	if (typeof window !== "undefined") {
		localStorage.setItem(key, value);
	}
};
