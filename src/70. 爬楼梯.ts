// https://leetcode.cn/problems/climbing-stairs/description/?envType=study-plan-v2&envId=top-100-liked

// #region
function climbStairs(n: number): number {
	// f(n) = f(n-1) + f(n-2)
	let a = 1
	let b = 2
	let c = a + b
	if (n < 3) return n
	for (let i = 3; i < n; i++) {
		a = b
		b = c
		c = a + b
	}
	return c
}
// #endregion

export {}
console.log(climbStairs(2))
console.log(climbStairs(3))
