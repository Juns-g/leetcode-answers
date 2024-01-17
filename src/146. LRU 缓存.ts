// https://leetcode.cn/problems/lru-cache/description/?envType=study-plan-v2&envId=top-interview-150
// Vue3 的 keepalive 就是用的这个 LRU 来管理组件的缓存
// #region
class LRUCache {
	capacity: number;
	map: Map<number, number>;
	constructor(capacity: number) {
		this.capacity = capacity;
		this.map = new Map();
	}

	get(key: number): number {
		if (this.map.has(key)) {
			const val = this.map.get(key) as number;
			this.map.delete(key);
			this.map.set(key, val);
			return val;
		}
		return -1;
	}

	put(key: number, value: number): void {
		if (this.map.has(key)) {
			this.map.delete(key);
		}
		this.map.set(key, value);
		if (this.map.size > this.capacity) {
			this.map.delete(this.map.keys().next().value);
		}
	}
}
// #endregion

/**
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
export default {};
