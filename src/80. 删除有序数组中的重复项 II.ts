// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function removeDuplicates(nums: number[]): number {
	return process(nums, 2);
}
function process(nums: number[], repeatCount: number) {
	let now = 0;
	for (const item of nums) {
		if (now < repeatCount || nums[now - repeatCount] !== item) {
			nums[now++] = item;
		}
	}
	return now;
}
// #endregion

const testNums = [1, 1, 1, 2, 2, 3];
console.log('🚀 ~ removeDuplicates(testNums):', removeDuplicates(testNums));

// 题解
// 关于这一类题目可以提取一个通解，就像上面的process函数一样
// 1. 通过now指针来记录当前处理到的位置
// 2. 通过repeatCount来记录允许重复的次数
// 3. 通过nums[now - repeatCount] !== item来判断是否重复
// 4. 如果重复，now不变，如果不重复，now++，并且将item赋值给nums[now]
