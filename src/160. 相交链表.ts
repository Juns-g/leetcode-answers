import { ListNode } from './types/ListNode'
// https://leetcode.cn/problems/intersection-of-two-linked-lists/?envType=study-plan-v2&envId=top-100-liked

// #region
/** 自己按照思路写的
 *  空间O(1)
 *  时间O(n + m + |n - m| + min(n, m))
 *
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	if (!headA || !headB) return null

	let lenA = 0,
		lenB = 0
	let cur = null
	cur = headA
	while (cur.next) {
		lenA++
		cur = cur.next
	}
	lenA++
	cur = headB
	while (cur.next) {
		lenB++
		cur = cur.next
	}
	lenB++

	let diff = Math.abs(lenB - lenA)
	let curA = headA
	let curB = headB
	if (lenA > lenB) {
		while (diff--) curA = curA.next
	}
	if (lenA < lenB) {
		let copyDiff = diff
		while (copyDiff--) curB = curB.next
	}

	let step = Math.min(lenA, lenB)
	while (step--) {
		if (curA === curB) return curA
		curA = curA.next
		curB = curB.next
	}

	return null
}
// #endregion

// #region
/** 双指针，O(m+n), O(1) */
function getIntersectionNode_2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	if (!headA || !headB) return null
	let pA = headA
	let pB = headB
	while (pA !== pB) {
		pA = pA === null ? headB : pA.next
		pB = pB === null ? headA : pB.next
	}
	return pA
}
// #endregion

// #region
/** 哈希，O(m+n), O(m) */
function getIntersectionNode_3(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	if (!headA || !headB) return null
	let set = new Set()
	let cur = headA
	while (cur !== null) {
		set.add(cur)
		cur = cur.next
	}
	cur = headB
	while (cur !== null) {
		if (set.has(cur)) return cur
		cur = cur.next
	}
	return null
}
// #endregion
export {}
