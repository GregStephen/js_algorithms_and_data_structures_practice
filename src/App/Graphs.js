/*
GRAPHS 
A collection of nodes and the connections between them
Freeform, no pattern

A tree is a type of a graph
*/


/*
Uses for graphs
- Social Networks
- Location Mapping
- Routing Algorithms
- Recommendations - 'People also watched', 'Frequently bought with'
*/

/*
Terms
- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - a value assigned to an edge/ or not
- Directed/Undirected - a direction assigned to an edge/ or not
*/


/*
Types of Graphs

Undirected Graph
- No direction associated with an edge
  - i.e. facebook friends, you see both pages

Directed Graph
- One way with the edge, a direction is assigned
  - i.e. Instagram followers, you can follow but not be followed

Weighted
- The edges have a value

Unweighted
- The edges have no value
*/

/*
Adjancency Matrix
Store the edges as 0, 1 for true or false

- TAKES UP MORE SPACE(IN SPARSE GRAPHS)
- SLOWER TO ITERATE OVER ALL EDGES
- Faster to lookup specific edge
*/

/*
Adjancency List

- Can take up less space(in sparse graphs)
- Faster to iterate over all edges
- CAN BE SLOWER TO LOOKUP SPECIFIC EDGE

Hash table works best when its not numeric
{
A: ['B', 'C']
B: ['C']...
...
}
*/

/*
Differences and BIG O
ADJACENCY LIST
Add Vertex - O(1)
Add Edge - O(1)
Remove Vertex - O(numOfVertices + numOfEdges)
Remove Edge - O(numOfEdges)
Query - O(numOfVertices + numOfEdges)
Storage - O(numOfVertices + numOfEdges)

ADJACENCY MATRIX
Add Vertex - O(numOfVertixes**2)
Add Edge - O(1)
Remove Vertex - O(numOfVertixes**2)
Remove Edge - O(1)
Query - O(1)
Storage - O(numOfVertixes**2)
*/


class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex = (vertex) => {
    if(!this.adjacencyList[vertex]) {    
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge = (vertex1, vertex2) => {
    // HAS NO ERROR HANDLING
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}