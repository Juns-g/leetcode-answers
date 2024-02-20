// https://leetcode.cn/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150

// #region
// 使用俩个栈，其中一个栈就存取每一次的最小值
class MinStack {
	stack: number[];
	minStack: number[];
	constructor() {
		this.stack = [];
		this.minStack = [Infinity];
	}

	push(val: number): void {
		this.stack.push(val);
		this.minStack.push(Math.min(this.getMin(), val));
	}

	pop(): void {
		this.stack.pop();
		this.minStack.pop();
	}

	top(): number {
		return this.stack.at(-1);
	}

	getMin(): number {
		return this.minStack.at(-1);
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
