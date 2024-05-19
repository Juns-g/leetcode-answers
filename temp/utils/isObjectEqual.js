const sortFn = (a, b) => a[0].localeCompare(b[0])

export const isObjectEqual = (obj, other) => {
	const entries1 = Object.entries(obj).toSorted(sortFn)
	const entries2 = Object.entries(other).toSorted(sortFn)
	if (entries1.length !== entries2.length) return false
	let flag = true
	entries1.forEach(([key, val], i) => {
		let [key2, val2] = entries1[i]
		if (key !== key2) flag = false
		if (val !== val2) flag = false
	})
	return flag
}
