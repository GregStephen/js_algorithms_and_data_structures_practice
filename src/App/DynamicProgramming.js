/*
A method of solving a complex problem by breaking it down
into a collection of simpler subproblems,
solving each of those subproblems just once,
and storing their solutions


ONLY WORKS ON PROBLEMS WITH
Optimal Substructure 
AND
Overlapping Subproblems


Overlapping Subproblems
A problem is said to have Overlapping Subproblems
if it can be broken down into subproblems
which are reused several times

EX
Fibonacci Sequence
"Every number after the first two is the sum of the two preceding ones"
*/

const { findByAltText } = require("@testing-library/react");

/*
Optimal Substructure

A problem is said to have optimal substructure if the bigger
optimal solution can be constructed from optimal solutions
from its subproblems

EX 
Shortest path
shortest path from A to F is A->C->D->F
shortest path from A to D is A->C->D
shortest path from A to C is A->C
*/

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

/*
this is a terrible way 
O(2^n)
*/

/*
MEMOIZATION
Storing th results of expensive function calls and returning
the cached result when the same input occur again

Time complexity 
O(n) 
Linearly grows!
*/

const fibmemo = (n, memo=[]) => {
  if (memo[n] !== undefined) return memo[n]
  if (n <= 2) return 1;
  let res = fibmemo(n-1, memo) + fibmemo(n-2, memo);
  memo[n] = res
  return res;
}


/*
TABULATION
is a bottom up approach
Storing the result of a previous result in a table usually an array

usually done using iteration
better space complexity can be achieved using tabulation
*/

const fibTab = (n) => {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
};
