const Node = function () {
  this.children = {}; // 存储子节点
  this.isEnd = false; // 标记是否是一个完整的单词
};

var Trie = function () {
  this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let char of word) {
    // node.children[char] 即 访问 'a' 对应的子节点（TrieNode）
    if (!node.children[char]) {
      node.children[char] = new Node();
    }
    node = node.children[char]; // 移动到下一个字符的节点
  }
  node.isEnd = true;
  return node;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this._findNode(word);
  return node !== null && node.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this._findNode(prefix) !== null;
};

// 辅助函数：查找某个前缀对应的最后一个节点
Trie.prototype._findNode = function (word) {
  let node = this.root;
  for (const char of word) {
    // 只要找到不存在的节点就return null,一直都有才迭代到下一个node
    if (!node.children[char]) {
      return null;
    }
    // 移到下一个node
    node = node.children[char];
  }
  return node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
