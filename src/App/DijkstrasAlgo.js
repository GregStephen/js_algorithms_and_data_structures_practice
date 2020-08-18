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
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue = (val, priority) => {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue = () => {
    return this.values.shift();
  };
  sort = () => {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

export default {WeightedGraph, PriorityQueue};