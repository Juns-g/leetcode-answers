// https://leetcode.cn/problems/lru-cache/description/?envType=study-plan-v2&envId=top-interview-150
// Vue3 的 keepalive 就是用的这个 LRU 来管理组件的缓存
// #region
class LRUCache {
	capacity: number;
	map: Map<number, number>;
	constructor(capacity: number) {
		this.capacity = capacity;
	}

	get(key: number): number {
		return 0;
	}

	put(key: number, value: number): void {}
}
// #endregion

/**
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
export default {};
