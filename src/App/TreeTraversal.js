/*
Two ways:

- Breadth-first Search
  - Going across working your way down
- Depth-first Search
  - InOrder
  - PreOrder
  - PostOrder
*/

/* BFS
Steps iteratively

- creates queue and a variable to storea values of nodes visited
- place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of
    the node into the variable that stores the node
  - If there is a left property on the node dequeued- add it to the queueu
  - If there is a right property on the node dequeued- add it to the queue
- Return the variable that stores the values
*/

