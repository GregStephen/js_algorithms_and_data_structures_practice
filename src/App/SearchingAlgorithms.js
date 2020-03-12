// Linear searching!
// O(n) 

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}


// Binary Searching
// O(log n)

const binarySearch = (arr, value) => {
  let leftPointer = 0;
  let rightPointer = (arr.length - 1);
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  while (arr[middlePointer] !== value && leftPointer <= rightPointer) {
    if (arr[middlePointer] < value) {
      leftPointer = middlePointer + 1;
    }
    else if (arr[middlePointer] > value) {
      rightPointer = middlePointer - 1;
    }
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  }
  if (arr[middlePointer] === value) {
    return middlePointer;
  }
  return -1;
}