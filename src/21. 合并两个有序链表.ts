// https://leetcode.cn/problems/merge-two-sorted-lists/?envType=study-plan-v2&envId=top-interview-150

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// #region
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	if (!list1) return list2;
	if (!list2) return list1;

	const ans = new ListNode();
	let cur = ans;
	let i: ListNode | null = list1,
		j: ListNode | null = list2;
	while (i && j) {
		if (i.val > j.val) {
			cur.next = j;
			j = j.next;
		} else {
			cur.next = i;
			i = i.next;
		}
		cur = cur.next;
	}
	cur.next = i ? i : j;
	return ans.next;
}
// #endregion

// #region
// 递归做法,
// ! cv到leetcode的时候注意改一下函数名
function mergeTwoLists_2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	if (!list1) return list2;
	if (!list2) return list1;
	if (list1.val < list2.val) {
		list1.next = mergeTwoLists_2(list1.next, list2);
		return list1;
	} else {
		list2.next = mergeTwoLists_2(list2.next, list1);
		return list2;
	}
}
// #endregion

export default {};
