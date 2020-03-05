// a recursive function is a function that calls itself

// MUST HAVE A BASE CASE
// other wise it would never stop

// MUST Return the correct thing and return in the base case so it checks out


// examples of recursive function


function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}


function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// sumRange(4) would return (4 + sumRange(3)), sumRange(3) would return (3 + sumRange(2))
// sumRange(2) would return (2 + sumRange(1)), sumRange(1) returns 1
// So working backwards, sumRange(1) returns 1, so sumRange(2) returns 2+ 1 which is 3
// sumRange(3) returns 3 plus sumRange(2) (which is now 3) so it returns 6
// sumRange(4) then returns 4 + 6 which is 10


function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}


// HELPER METHOD RECURSION
// a pattern where we have an OUTER function that is not recursive
// but has a recursive function inside that helps the outer function


function collectOddsValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr);
  return result;
}

///////////////////////////////////////////////////////////
///////////////////////////// PURE RECURSION /////////////////
/////////////////////////////////////////////


// pure recursion tips :
// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays
// so you do not mutate them

// Strings are immutable so yuo will need to use methods like slice, substr, or substring to make copies

// To make copies of objects use Object.assign or the spread operator

function collectOddValuesPure(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
  return newArr;
}