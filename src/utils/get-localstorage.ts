export const getLocalStorage = ({ key }: { key: string }) => {
	if (typeof window !== "undefined") {
		const valueFromStorage = localStorage.getItem(key);
		return valueFromStorage;
	}
	return undefined;
};
