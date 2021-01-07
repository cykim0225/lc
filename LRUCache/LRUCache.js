class Node {
  constructor(key, val) {
      this.key = key;
      this.val = val;
      this.prev = null;
      this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = new Node();
      this.tail = new Node();
      this.head.next = this.tail;
      this.tail.prev = this.head;
  }

  insertHead = (node) => {
      node.next = this.head.next;
      node.prev = this.head;
      this.head.next.prev = node;
      this.head.next = node;
  };

  removeNode = (node) => {
      let prev = node.prev;
      let next = node.next;
      prev.next = next;
      next.prev = prev;
  }

  moveToHead = (node) => {
      this.removeNode(node);
      this.insertHead(node);
  }

  popTail = () => {
      let tail = this.tail.prev;
      this.removeNode(tail);

      return tail.key;
  }
}

/**
* @param {number} capacity
*/
class LRUCache {
  constructor(capacity) {
      this.hash = {};
      this.size = 0;
      this.capacity = capacity;
      this.dll = new DoublyLinkedList;
  }

/**
* @param {number} key
* @return {number}
*/
  get = function(key) {
      let node = this.hash[key];
      if (!node) {
          return -1;
      } else {
          this.dll.moveToHead(node);
      }

      return node.val;
  };

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
  put = function(key, value) {
      let node = this.hash[key];
      let newNode = new Node(key, value);

      if (!node) {
          this.dll.insertHead(newNode);
          this.hash[key] = newNode;
          this.size++;

          if (this.size > this.capacity) {
              let tailKey = this.dll.popTail();
              delete this.hash[tailKey];
              this.size--;
          }
      } else {
          node.val = value;
          this.dll.moveToHead(node);
      }
  };

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

}