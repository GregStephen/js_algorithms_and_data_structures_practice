/* A collection of data that is a LIFO structure
Last In First Out

WHERE STACKS ARE USED
- Managing function invocations
- Undo/Redo
- Routing (the history object) is treated like a stack
- used as an intermediate in algorithm
*/
/*
BIG O OF STACKS with singly linked lists

Insertion - O(1) CONSTANT TIME
Removal - O(1)
Searching - O(N)
Access - O(N)

*/
// ARRAY IMPLEMENTATION

let stack = [];
// adding from and removing from the end
// better for O Time complexity since you dont have to re index the items;
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop();
stack.pop();
stack.pop();


// adding from and removing from the beginning
// have to reindex all items, not the best for O time complexity
stack.unshift("create new file");
stack.unshift("resized file");
stack.unshift("cloned out wrinkle");
stack.shift();
stack.shift();
stack.shift();

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      let firstNode = this.first;
      this.first = newNode;
      newNode.next = firstNode;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return null;
    let firstNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = firstNode.next;
    this.size--;
    return firstNode.value;
  }
}



/* QUEUE is a FIFO - First
- Background tasks
- Uploading resources
- Printing / Task processing
- Many ways to make a queue
*/


/*
BIG O of Queues with the singly linked list
Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
*/

// Creating one with an array
var q = []
q.push("first")
q.push("second")
q.push("third")
q.shift()
q.shift()
q.shift()

// OR
q.unshift("FIRST")
q.unshift("SECOND")
q.pop()
q.pop()

// A linked list will perform better

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
