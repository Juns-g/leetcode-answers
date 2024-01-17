// https://leetcode.cn/problems/lru-cache/description/?envType=study-plan-v2&envId=top-interview-150
// Vue3 的 keepalive 就是用的这个 LRU 来管理组件的缓存
// 双向链表 + map
// #region
class DoublyNode {
	private _value: number | null;
	private _key: number;
	private _next: DoublyNode | null;
	private _prev: DoublyNode | null;

	constructor(key: number, value: number | null) {
		this._key = key;
		this._value = value;
	}

	get value() {
		return this._value;
	}
	get key() {
		return this._key;
	}
	get next() {
		return this._next;
	}
	get prev() {
		return this._prev;
	}

	setValue(val: number | null) {
		this._value = val;
	}

	setNext(node: DoublyNode | null) {
		this._next = node;
	}

	setPrev(node: DoublyNode | null) {
		this._prev = node;
	}
}

class LRUCache {
	capacity: number;
	keyMap: Map<number, DoublyNode>;
	dummyHead: DoublyNode;
	dummyTail: DoublyNode;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.dummyHead = new DoublyNode(-1, -1);
		this.dummyTail = new DoublyNode(-1, -1);
		this.dummyHead.setNext(this.dummyTail);
		this.dummyTail.setNext(this.dummyHead);
		this.keyMap = new Map();
	}

	get(key: number): number {
		const node = this.keyMap.get(key);
		if (!node) return -1;
		this.moveToHead(node);
		return node.value as number;
	}

	put(key: number, value: number): void {
		const node = this.keyMap.get(key);
		if (node) {
			node.setValue(value);
			this.moveToHead(node);
			return;
		}
		if (this.keyMap.size >= this.capacity) {
			const oldestNode = this.dummyTail.prev as DoublyNode;
			this.deleteNode(oldestNode);
			this.keyMap.delete(oldestNode.key);
		}
		const newNode = new DoublyNode(key, value);
		this.insertHead(newNode);
		this.keyMap.set(key, newNode);
	}

	private moveToHead(node: DoublyNode) {
		this.deleteNode(node);
		this.insertHead(node);
	}

	private deleteNode(node: DoublyNode) {
		const prev = node.prev;
		const next = node.next;
		// 不考虑删除dummyHead, dummyTail
		if (prev && next) {
			node.setPrev(null);
			node.setNext(null);
			prev.setNext(next);
			next.setPrev(prev);
		}
	}

	private insertHead(node: DoublyNode) {
		const next = this.dummyHead.next as DoublyNode;

		next.setPrev(node);
		this.dummyHead.setNext(node);
		node.setNext(next);
		node.setPrev(this.dummyHead);
	}
}
// #endregion

export default {};
