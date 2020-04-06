// these improve time complexity from O(n sq) to O(n log n)

/////////////////////////////////////////
/////////////// MERGE SORT //////////////
/////////////////////////////////////////

/* 
Combination of merging and sorting
exploits the fact that arrays of 1 element are always sorted
Works by decomposing an array into smaller 1 element arrays
THEN you merge the already sorted array into another already sorted array
*/


// This is the function that merges two sorted arrays
// Runs in O(n + m) time AND space
const merge = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr[i]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }

  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++
  }
  return mergedArray;
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}


/* 
All time complexity is O(n log n)
As n grows we have O(n) for merge
The decompose of MergeSort is O(log n)
That makes it O(n log n)
Space complexity is O(n)
As we have a larger array we have to use more space
 */


////////////////////////////////////////
///////////// QUICK SORT ///////////////
////////////////////////////////////////

/*
Works by selecting one element(called the "pivot")
and finding the index where the pivot should be
once the pivot is sorted then quick sorted is applied to the left or right
*/

const pivot = (array, start = 0, end = array.length + 1) => {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  let indexOfPivot = start;
  let pivot = arr[start]
  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i])
      indexOfPivot++;
    swap(array, indexOfPivot, i);
  }
  swap(array, start, indexOfPivot)
  return indexOfPivot;
}

const quickSort = (array, left = 0, right = array.length - 1) => {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(array, left, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, right)
  }
  return array;
}
