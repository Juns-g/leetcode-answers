// https://leetcode.cn/problems/word-break/description/?envType=study-plan-v2&envId=top-interview-150
// #region
function wordBreak(s: string, wordDict: string[]): boolean {
	let set = new Set(wordDict);
	let dp = new Array(s.length + 1).fill(false);
	dp[0] = true;
	for (let i = 1; i <= s.length; i++) {
		for (let j = 0; j < i; j++) {
			if (dp[j] && set.has(s.slice(j, i))) {
				dp[i] = true;
				break;
			}
		}
	}
	return dp[s.length];
}
// #endregion
export {};

console.log(wordBreak('leetcode', ['leet', 'code']));
