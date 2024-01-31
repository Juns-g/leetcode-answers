// https://leetcode.cn/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150

// #region
class MinStack {
	stack: number[];
	constructor() {
		this.stack = [];
	}
	push(val: number): void {
		this.stack.push(val);
	}

	pop(): void {
		this.stack.pop();
	}

	top(): number {
		return this.stack.at(-1) ?? -1;
	}

	getMin(): number {
		let min = Infinity;
		this.stack.forEach((item) => {
			min = Math.min(item, min);
		});
		return min;
	}
}
// #endregion
export default {};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
