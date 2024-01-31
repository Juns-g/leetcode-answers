// https://leetcode.cn/problems/simplify-path/description/?envType=study-plan-v2&envId=top-interview-150

import exp from 'constants';

// #region
function simplifyPath(path: string): string {
	const arr = path.split('/');
	const stack: string[] = [];
	arr.forEach((item) => {
		if (item.trim() === '') return;
		if (item === '.') return;
		if (item === '..') {
			if (stack.length >= 1) {
				stack.pop();
			}
		} else {
			stack.push(item);
		}
	});
	return '/' + stack.join('/');
}
// #endregion
export default {};
