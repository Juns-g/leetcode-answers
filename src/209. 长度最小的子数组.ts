// https://leetcode.cn/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function minSubArrayLen(target: number, nums: number[]): number {
	if (nums[0] >= target) return 1;
	let ans = nums.length;
	let left = 0,
		right = 1;
	let sum = nums[left] + nums[right];
	while (right < nums.length) {
		if (sum < target) {
			right++;
			sum += nums[right];
		} else {
			ans = Math.min(ans, right - left + 1);
			sum -= nums[left];
			left++;
		}
	}
	if (left === 0) return 0;
	return ans;
}
// #endregion

export default {};
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
