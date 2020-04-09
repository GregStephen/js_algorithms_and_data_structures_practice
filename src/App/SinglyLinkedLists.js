/*
A list of data like an array, but an array is mapped
A Linked List is a data structure that contains a head, tail, and length property
A linked list consists of nodes and each node has a value
and a pointer to another node or null

*/


/*
COMPARED WITH AN ARRAY
LISTS
Do not have indexes
Connected viw nodes with a NEXT pointer
Random Access is not allowed

ARRAYS
Indexed in order
Insertion and deletion can be expensive
Can quickly be accessed at a specific index

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let counter = 0;
    let itemToReturn = this.head;
    while (counter !== index) {
      itemToReturn = itemToReturn.next;
      counter++;
    }
    return itemToReturn;
  }

  set(index, value) {
    let valueToChange = this.get(index);
    if (!valueToChange) {
      return false;
    }
    valueToChange = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    let newNode = new Node(value);
    let prevNode = this.get(index - 1)
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    let previousNode = this.get(index - 1);
    let nodeToDelete = previousNode.next;
    previousNode.next = nodeToDelete.next;
    this.length--;
    return nodeToDelete;
  }

  reverse() {
    let next;
    let prev = null;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    for(let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}


/*
BIG O
 Insertion = O(1)
 Removal = it depends best case is O(1) if its at beginning or O(n)
 Searching = O(n)
 Access = O(n)
*/