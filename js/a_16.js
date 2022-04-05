// 가장 먼 노드
class Node {
  constructor(value) {
    this._value = value;
    this.next = [];
    this.vertex = 0;
  }
}

[
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

class Tree {
  constructor(node) {
    this._root = node;
  }

  append(value, child) {
    this.find(value);
  }

  find(value, node = this._root) {
    // const root = this._root;
    const currentNode = node;
    while (true) {
      if (currentNode.value === value) break;
      else if (currentNode.length) {
        for (let i = 0; i < currentNode.length; i++) {
          this.find(value, currentNode[i]);
        }
      } else {
        currentNode = currentNode.child;
      }
    }

    return currentNode;
  }
}
