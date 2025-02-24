/**
 * @param {number} capacity
 */
const Node = function (key = 0, value = 0) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.dummy = new Node(); // 哨兵节点
  this.dummy.prev = this.dummy;
  this.dummy.next = this.dummy;
  this.keyToNode = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this._getNode(key);
  return node ? node.value : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this._getNode(key);
  if (node) {
    node.value = value; // 更新 value
    return;
  }
  node = new Node(key, value);
  this.keyToNode.set(key, node);
  this._pushFront(node);
  if (this.keyToNode.size > this.capacity) {
    const backNode = this.dummy.prev;
    this.keyToNode.delete(backNode.key);
    this._remove(backNode);
  }
};

LRUCache.prototype._getNode = function (key) {
  if (!this.keyToNode.has(key)) {
    return null;
  }
  const node = this.keyToNode.get(key);
  this._remove(node);
  this._pushFront(node);
  return node;
};

LRUCache.prototype._remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype._pushFront = function (node) {
  node.prev = this.dummy;
  node.next = this.dummy.next;
  node.prev.next = node;
  node.next.prev = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
