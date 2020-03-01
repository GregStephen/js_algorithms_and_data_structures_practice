/////////////// FREQUENCY COUNTER PATTERN //////////////////

function same(arr1, arr2) {
  // If not the same length then obviously not the same
  if (arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
  }
  return true
}

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}


/////////////////////////////////////////////////
//////////////// MULTIPLE POINTERS //////////////
/////////////////////////////////////////////////

// takes in an array of SORTED numbers and figures out how many of the values are unique

function countUniqueValues(arr){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
    // loops thru the array ONCE checking to see if the value of wherever i is the same as the wherever j is
      if(arr[i] !== arr[j]){
        // if it is NOT the same then i increases by one and the new value of where it is located in the array
        // is what the new number was
          i++;
          arr[i] = arr[j]
      }
  }
  // to figure out the total number of unique values, just return the location of i + 1
  return i + 1;
}

////////////////////////////////////////////////////
/////////////////SLIDING DOOR///////////////////////
////////////////////////////////////////////////////

// takes in a SORTED array and then a number
// calculates the max number of added numbers in the array dependant on the length of the number
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  // cant calculate if the number of digits needed is smaller than the length of the array
  if (arr.length < num) return null;

  // gets the first value of how many digits needed added together and sets it as the maxsum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // now tempSum and maxSum equal each other
  tempSum = maxSum;
  // now loops thru the array BUT starts at the digit after the ones we just added togeher
  for (let i = num; i < arr.length; i++) {
    // calculates the sum of these numbers by taking the old sum we had
    // minuses off the first digit of the old sub array, since we dont need it anymore
    // adds the last number in the current array
    tempSum = tempSum - arr[i - num] + arr[i];
    // sets maxSum to whichever is greater
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


export default {same, validAnagram, countUniqueValues, maxSubarraySum};

