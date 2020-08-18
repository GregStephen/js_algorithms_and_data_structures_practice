/*
Finds the shortest path between two vertices on a graph

WHY is it useful?
GPS - finding fastest route
Network Routing - finds open shortest path for data
Biology - used to model the spread of viruses among humans
Airline tickets - finding cheapest route to your destination
Many other uses!
*/

/*
The Approach
1. Every time we look to visit a new node, we pick the 
node with the smallest known distance to visit first

2. Once we've moved to the node we're going to visit, we look
at each of its neighbors

3. For each neighboring node, we calculate the distance by
summing the total edges that lead to the node we're checking
from the starting node

4. If the new total distance to a node is less than the previous
total, we store the new shorter distance for that node

*/
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex = (vertex) => {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge = (vertex1, vertex2, weight) => {
    this.adjacencyList[vertex1].push({node:vertex2, weight});
    this.adjacencyList[vertex2].push({node:vertex1, weight});

  }

  dijkstras = (startVertex, endVertex) => {
    const keys = this.adjacencyList.keys();
    const distances = {};
    const queue = new PriorityQueue();
    const previous = {};
    let path = [];
    let smallest;
    keys.forEach(key => {
      if (key === startVertex) {
        queue.enqueue(key, 0);
        distances[key] = 0;
      }
      else {
        distances[key] = Infinity;
        queue.enqueue(key, Infinity);
      }
      previous[key] = null;
    });
    while(queue.values.length) {
      smallest = queue.dequeue().val;
      if (smallest === endVertex) {
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if(smallest || distances[smallest] !== Infinity){
        for(let neighbor in this.adjacencyList[smallest]){
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          if(candidate < distances[nextNode.node]) {
            // updating new smallest distance to neighbor
            distances[nextNode.node] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNode.node] = smallest;
            // enqueue in priority queue with new priority
            queue.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue = (val, priority) => {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp = () => {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue = () => {
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

export default {WeightedGraph, PriorityQueue, Node};