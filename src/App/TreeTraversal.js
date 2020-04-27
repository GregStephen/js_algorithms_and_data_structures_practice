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

- creates queue and a variable to store a values of nodes visited
- place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of
    the node into the variable that stores the node
  - If there is a left property on the node dequeued- add it to the queueu
  - If there is a right property on the node dequeued- add it to the queue
- Return the variable that stores the values
*/

/*
 DEPTH FIRST SEARCH
 Steps - recursively
PRE ORDER
 - Create a variable to store the values of nodes visited
 - Store the root of the BST in a variable called current
 - Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values

POST ORDER

 - Create a variable to store the values of nodes visited
 - Store the root of the BST in a variable called current
 - Write a helper function which accepts a node
  - If the node has a left property call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable
- Return the array of values

IN ORDER
 - Create a variable to store the values of nodes visited
 - Store the root of the BST in a variable called current
 - Write a helper function which accepts a node
  - If the node has a left property call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values
*/


/*
  Which is better?
   DEPENDS

   If it's a wide tree than BFS takes more space complectity
   because its adding all those to the queue

   Time complexity is the same always but Space complexity depends on the tree

   PreOrder is good to "Export" a tree structure so that it is
   easily reconstructed or copied because you know the root
*/