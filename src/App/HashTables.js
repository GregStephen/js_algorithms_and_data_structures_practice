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


/*
Dealing with collisions
Separate Chaining -
at each index in our array we store values using a more sophistic data structure using an array

allows us to store multiple key value pairs at the same position

Linear Probing -
When we find a collision, we search thru the array to find the next empty slot
*/

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for(let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i] === key) {
          return this.keyMap[index][i][1];
        }
        return undefined;
      };
    }
  return undefined;
  }
  keys() {
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}


/* 
SET
1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

GET
1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found returns undefined
*/


/*
BIG O
(average case)
INSERT: O(1)
DELETION: O(1)
ACCESS: O(1)
*/