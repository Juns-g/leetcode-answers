/** 手写快排，数组升序 */
export const quickSort = (nums: number[], left = 0, right = nums.length - 1) => {
	if (left >= right) return
	const index = partition(nums, left, right)
	quickSort(nums, left, index - 1)
	quickSort(nums, index + 1, right)
}

const partition = (nums: number[], left: number, right: number) => {
	const pivot = nums[left]
	let l = left
	let r = right
	while (l < r) {
		while (l < r && nums[r] >= pivot) r--
		while (l < r && nums[l] <= pivot) l++
		;[nums[l], nums[r]] = [nums[r], nums[l]]
	}
	;[nums[l], nums[left]] = [nums[left], nums[l]]
	return l
}

// let ns = [3, 4, 2, 12, 3]
// quickSort(ns)
// console.log(ns)
