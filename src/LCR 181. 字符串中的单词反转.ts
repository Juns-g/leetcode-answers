// https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/description/

// #region
function reverseMessage(message: string): string {
	// 不用split，join
	let arr: string[] = [];
	let temp = '';
	for (let char of message) {
		if (char === ' ') {
			if (temp !== '') {
				arr.push(temp);
				temp = '';
			}
			continue;
		} else {
			temp += char;
		}
	}
	if (temp !== '') arr.push(temp);
	let ans = '';
	for (let i = arr.length - 1; i >= 0; i--) {
		ans += arr[i];
		if (i === 0) break;
		ans += ' ';
	}
	return ans;
}
// #endregion

export default {};
console.log(reverseMessage('the sky is blue'));
console.log(reverseMessage('  hello world!  '));
