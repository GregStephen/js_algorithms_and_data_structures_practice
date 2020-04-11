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

  set(index, value) {
    let indexValue = this.get(index);
    if (indexValue != null) {
      indexValue.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
       return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

      let nodeToReturn = this.get(index);
      let prevNode = nodeToReturn.prev;
      let nextNode = nodeToReturn.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      // nodeToReturn.prev.next = nodeToReturn.next
      // nodeToReturn.next.prev = nodeToReturn.prev
      // I like making the variables more, cleaner easier to read
      nodeToReturn.next = null;
      nodeToReturn.prev = null;
      this.length--;
      return nodeToReturn;

  }
}