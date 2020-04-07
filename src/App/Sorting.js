//////////////Optimized BubbleSort with noSwaps/////////////////////
// once no swaps happen, the array is sorted so doesn't need to keep going
// time Complexity O(nsquared)
// space complexity O(1)
////////////////////////////////////////////////////////
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}


////////////////////Selection sort////////////////////
// puts the lowest value into the first array and grows from there
// not good for nearly sorted
// time Complexity O(nsquared)
// space complexity O(1)
////////////////////////////////////////////////
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    // the lowest to start is always the first item in the array because it's the first you see
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      // starting at the next item, if the next number is lower than the starting number than it switches to be lower
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    // once the loop is done, if the lowest is not what you started with than it swaps the two and goes to the next item in the array
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}



///////////Insertion sort////////////////
// time Complexity O(nsquared)
// space complexity O(1)
// bad if almost sorted data
// good at sorting data live as data is coming in
//////////////////////////////////////////

function insertionSort(arr) {
  var currentVal;
  // goes thru the array starting on the second item
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    // then it checks with the items before it and if the iteration is not yet zero AND it is larger than 
    // current value than it'll keep working backwards 
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // since arr[j] has to be larger than the current value for the loop to keep going
      // it will move the larger item up
      arr[j + 1] = arr[j]
    }
    //once the loop stops it inserts the current value where it needs to go
    arr[j + 1] = currentVal;
  }
  return arr;
}
