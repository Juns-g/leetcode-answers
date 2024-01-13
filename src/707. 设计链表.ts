// https://leetcode.cn/problems/design-linked-list/description/

class ListNode {
	val: number | null;
	next: ListNode | null;
	constructor(val: number | null = null, next: ListNode | null = null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// #region
class MyLinkedList {
	head: ListNode | null;
	size: number;

	constructor() {
		this.head = null;
		this.size = 0;
	}

	getNode(index: number): ListNode | null {
		if (index < 0 || index >= this.size) return null;
		let node = this.head;
		for (let i = 0; i < index; i++) {
			node = node!.next;
		}
		return node;
	}

	get(index: number): number {
		if (index < 0 || index >= this.size) return -1;
		return this.getNode(index)!.val as number;
	}

	addAtHead(val: number): void {
		const oldHead = this.head;
		this.head = new ListNode(val, oldHead);
		this.size++;
	}

	addAtTail(val: number): void {
		if (this.size === 0) {
			this.size++;
			this.head = new ListNode(val, null);
			return;
		}
		const preNode = this.getNode(this.size - 1);
		preNode!.next = new ListNode(val, null);
		this.size++;
	}

	addAtIndex(index: number, val: number): void {
		if (index < 0 || index > this.size) return;
		if (index === 0) {
			this.addAtHead(val);
			return;
		}
		if (index === this.size || this.size === 0) {
			this.addAtTail(val);
			return;
		}
		const preNode = this.getNode(index - 1);
		const node = preNode!.next;
		preNode!.next = new ListNode(val, node);
		this.size++;
	}

	deleteAtIndex(index: number): void {
		if (index < 0 || this.size === 0) return;
		if (index === 0) {
			this.head = this.head!.next;
			this.size--;
			return;
		}
		const preNode = this.getNode(index - 1);
		if (!preNode || !preNode.next) return;
		preNode.next = preNode.next.next;
		this.size--;
	}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// #endregion

const obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
console.log('🚀 ~ obj:', obj);
obj.addAtIndex(3, 2);
console.log('🚀 ~ obj:', obj);

export default {};
