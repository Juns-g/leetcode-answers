// https://leetcode.cn/problems/daily-temperatures/description/?envType=study-plan-v2&envId=top-100-liked
// 单调栈
// #region
function dailyTemperatures(temperatures: number[]): number[] {
	const ans = new Array(temperatures.length).fill(0);
	let stack: number[] = [];

	for (let i = 0; i < temperatures.length; i++) {
		while (stack.length !== 0 && temperatures[i] > temperatures[stack.at(-1)]) {
			let index = stack.pop();
			ans[index] = i - index;
		}
		stack.push(i);
	}
	return ans;
}
// #endregion
export {};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 90]));
