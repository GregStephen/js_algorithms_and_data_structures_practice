/*
What is a Hash Table

Hash tables are used to store key-value pairs

they are like arrays ,but the keys are not ordered

Unlike arrays, hash tables are FAST for all of the following:
  finding values, adding new values and removing values

Objects and Maps in JS
Dictionaries in Python

To implement a hash table we'll use an array

In order to look up values by key, need a way to 
CONVERT KEYS INTO VALID ARRAY INDICES
A function that performs this task is called a 
HASH FUNCTION

*/

/*
HASH FUNCTION
What makes a good hash?
- FAST (i.e. constant time)
- Doesn't cluster outputs at specific indices, but distributes uniformly
- Deterministic (same input yields same output)
*/


const hash = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}