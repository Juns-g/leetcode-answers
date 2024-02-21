// https://leetcode.cn/problems/palindrome-linked-list/description/
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
// #region
// 直接转数组然后双指针的话，时间空间都是O(n)
// 所以可以直接翻转后半部分的链表，然后比较，再反转回来
function reverseList(head: ListNode) {
	let pre = null;
	let cur = head;
	while (cur) {
		let temp = cur.next;
		cur.next = pre;
		pre = cur;
		cur = temp;
	}
	return pre;
}

function searchHalf(head: ListNode) {
	let slow = head;
	let fast = head;
	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}
function isPalindrome(head: ListNode | null): boolean {
	if (!head) return true;
	let leftEnd = searchHalf(head);
	let rightStart = reverseList(leftEnd.next); // 翻转后半部分
	let i = head;
	let j = rightStart;
	let res = true;
	while (res && j) {
		if (i.val !== j.val) res = false;
		i = i.next;
		j = j.next;
	}
	leftEnd.next = reverseList(rightStart);
	return res;
}
// #endregion
export {};
