// https://www.nowcoder.com/practice/f96cd47e812842269058d483a11ced4f?tpId=37&tqId=21271&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=/exam/oj/ta?page%3D1%26tpId%3D37%26type%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=%E9%93%BE%E8%A1%A8
const rl = require('readline').createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class LinkList {
	constructor(val, next = null) {
		this.head = new Node(val, next);
	}
	insert(val, nodeVal) {
		let cur = this.head;
		let node = new Node(nodeVal);
		while (cur) {
			if (cur.val === val) {
				let temp = cur.next ?? null;
				cur.next = node;
				node.next = temp;
			}
			cur = cur.next;
		}
	}
	delete(val) {
		if (this.head.val === val) this.head = this.head.next;
		let cur = this.head;
		let pre = this.head;
		while (cur) {
			if (cur.val === val) {
				pre.next = cur.next;
			}
			pre = cur;
			cur = cur.next;
		}
	}
	toString() {
		let cur = this.head;
		let str = '';
		while (cur) {
			str += cur.val;
			str += ' ';
			cur = cur.next;
		}
		return str;
	}
}

void (async function () {
	// Write your code here
	while ((line = await readline())) {
		let tokens = line.split(' ');
		let arr = tokens.map(Number);
		let length = arr[0];
		let list = new LinkList(arr[1]);
		for (let i = 2; i < length * 2; i += 2) {
			list.insert(arr[i + 1], arr[i]);
		}
		let toDelVal = arr.at(-1);
		list.delete(toDelVal);
		console.log(list.toString());
	}
})();
