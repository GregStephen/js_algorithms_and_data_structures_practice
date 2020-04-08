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
}