function swap(nums: number[], i: number, j: number) {
	[nums[i], nums[j]] = [nums[j], nums[i]];
}

// 基准数优化，选取首、尾、中点的中位数
function getMed(nums: number[], left: number, right: number, mid: number) {
	// 此处使用异或运算来简化代码
	// 异或规则为 0 ^ 0 = 1 ^ 1 = 0, 0 ^ 1 = 1 ^ 0 = 1
	if (Number(nums[left] < nums[mid]) ^ Number(nums[left] < nums[right])) {
		return left;
	} else if (Number(nums[mid] < nums[left]) ^ Number(nums[mid] < nums[right])) {
		return mid;
	} else {
		return right;
	}
}

function partition(nums: number[], left: number, right: number) {
	let i = left;
	let j = right;
	const med = getMed(nums, left, right, Math.floor((left + right) / 2)); // 基准数字
	swap(nums, med, left); // 换到left作为基准
	const baseNum = nums[left];
	while (i < j) {
		while (i < j && nums[j] >= baseNum) j--;
		while (i < j && nums[i] <= baseNum) i++;
		swap(nums, i, j);
	}
	swap(nums, i, left);
	return i;
}

function quickSort(nums: number[], left: number = 0, right: number = nums.length - 1) {
	if (left >= right) return;
	const mid = partition(nums, left, right);
	quickSort(nums, left, mid - 1);
	quickSort(nums, mid + 1, right);
}

const nums = [2, 4, 1, 4, 5, 6, 0, 3, 5];
quickSort(nums);
console.log('快速排序后 nums =', nums);

export {};
