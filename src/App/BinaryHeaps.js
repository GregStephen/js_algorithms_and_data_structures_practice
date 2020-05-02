/*
Heaps are a type of Tree
Very similar to a binary search tree but with some different rules

Used to implement Priority Queues, which are VERY commonly used data structures
They are also used with graph traversal algorithms

In a MaxBinaryHeap, parent nodes are always larger than child nodes.
In a MinBinaryHeap, parent nodes are always smaller than child nodes
Can have at most two children (Binary)

*/

/* 
Max Binary Heap!
Each parent has at most two child nodes
The value of each parent node is always greater than its child nodes
There are no guarantees between sibling nodes
A binary heap is as compact as possible. All the children of each node
are as full as they can ben and tleft children are filled out first
*/


/*
For any index of an array - n
The left child is stored at 2n + 1
The right child is stored at 2n + 1

for any child node at index -n
the parent is at floor(n-1) / 2
*/

// adding to a MaxBinary Heap - add to the end, bubble up
// removing from a heap 
//    - Remove the root, 
//    - replace with the most recently added,
//    - adjust(sink down)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }


  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  extractMax() {
    let maxValue = this.values[0];
    let end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return maxValue;
  }
}