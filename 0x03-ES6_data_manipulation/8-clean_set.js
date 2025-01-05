export default function cleanSet(set, startString) {
	let result = '';
	set.forEach(item => {
		if (item.startsWith(startString)) {
			const str = item.slice(startString.length)
			if (result.length === 0) {
				result = str;
			}
			else {
				result = result.concat("-", str);
			}
		}
	});
	return result;
}
