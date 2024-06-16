function maxArea(height: number[]): number {
	let ans = 0
	let l = 0
	let r = height.length - 1
	while (l < r) {
		let w = r - l
		let h = Math.min(height[l], height[r])
		ans = Math.max(ans, w * h)
		height[l] < height[r] ? l++ : r--
	}
	return ans
}

export {}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
