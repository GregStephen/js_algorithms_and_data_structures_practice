// Binary tree- Each node can have at MOST 2 children

/*
BINARY SEARCH TREES
- Are Binary trees that contain data that can be sorted
- Every node to the left of a parent is ALWAYS LESS than the parent
- Every node to the right of a parent is ALWAYS GREATER than the parent
*/

/* BIG O time complexity
as the tree doubles we only add one more step of searching
 Insertion - O(log n)
 Searching - O(log n)
 NOT GUARANTEED THOUGH
 if it's a completely one sided tree it wouldn't be that great
*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let checkerNode = this.root;
    while (true) {
      if (value === checkerNode.value) return undefined;
      if (value < checkerNode.value) {
        if (checkerNode.left === null) {
          checkerNode.left = newNode;
          return this;
        } else {
          checkerNode = checkerNode.left;
        }
      }
      if (value > checkerNode.value) {
        if (checkerNode.right === null) {
          checkerNode.right = newNode;
          return this;
        } else {
          checkerNode = checkerNode.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let checkerNode = this.root.value;
    let found = false;
    while(checkerNode && !found) {
      if (value < checkerNode.value) {
        checkerNode = checkerNode.left;
      }
      else if (value > checkerNode.value) {
        checkerNode = checkerNode.right;
      }
      else {
        found = true;
      }
    }
    if (!found) return undefined;
    return checkerNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);