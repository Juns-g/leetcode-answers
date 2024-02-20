let nums = [2, 3, 4, 5];
function resolve(nums) {
	let ans = new Array(nums.length).fill(0);
	let stack: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		while (stack.length && nums[i] > nums[stack.at(-1)]) {
			let j = stack.pop();
			ans[j] = i - j;
		}
		stack.push(i);
	}
	return ans;
}
