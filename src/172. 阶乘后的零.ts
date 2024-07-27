// https://leetcode.cn/problems/factorial-trailing-zeroes/description/

// 先来实现一下阶乘
// 时空，O(n), O(1)
function factorial(n: number): number {
	if (n <= 1) return 1
	let ans = 1
	while (n > 0) {
		ans *= n
		n--
	}
	return ans
}
// console.log(factorial(4))

// O(n), O(n)
function factorial_2(n: number): number {
	if (n <= 1) return 1
	return factorial_2(n - 1) * n
}
// console.log(factorial(4))

// 数学啊，好难
function trailingZeroes(n: number): number {
	let ans = 0
	if (n <= 1) return ans
	while (n) {
		n = Math.floor(n / 5)
		ans += n
	}
	return ans
}

console.log(trailingZeroes(5))
