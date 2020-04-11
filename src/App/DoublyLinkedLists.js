/*
Almost identical to SIngly Linked Lists
except every node has another pointer to the previous node
Uses more memory but is more flexible
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let poppedTail = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    }
    else {
      this.tail = poppedTail.prev;
      poppedTail.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return poppedTail;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    let counter = 0;
    let nodeToReturn = this.head;
    if (index <= this.length/2) {
      while(counter != index) {
        nodeToReturn = nodeToReturn.next;
        counter++
      }
    }
    else {
      counter = this.length -1;
      nodeToReturn = this.tail;
      while(counter != index) {
        nodeToReturn = nodeToReturn.prev;
        counter--;
      }
    }
    return nodeToReturn;
  }
}