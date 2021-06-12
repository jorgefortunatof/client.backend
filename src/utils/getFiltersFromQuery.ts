export default function getFiltersFromQuery(query: any): object {
	const filters = { ...query };
	const keys: string[] = Object.keys(filters);

	for (let key of keys) {
		if (!filters[key]) {
			delete filters[key];
		}
	}

	return filters;
}
