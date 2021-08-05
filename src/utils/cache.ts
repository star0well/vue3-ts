class localCache {
	setCache(key: string, value: any) {
		window.localStorage.setItem(key, JSON.stringify(value));
	}
	getCathe(key: string) {
		const value = window.localStorage.getItem(key);
		if (value) {
			return JSON.parse(value);
		}
	}
	deleteCatche(key: string) {
		window.localStorage.removeItem(key);
	}
	clearCathe() {
		window.localStorage.clear();
	}
}
export default new localCache();
