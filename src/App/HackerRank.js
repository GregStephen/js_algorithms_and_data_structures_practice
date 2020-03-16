const sockMerchant = (n, ar) => {
  let socksToSell = 0;
  if (n <= 1) return socksToSell;
  for (let i = 1; i < ar.length; i ++) {
    if (ar[0] === ar[i]) {
      socksToSell ++;
      return socksToSell += sockMerchant((n - 2), ar.slice(1, i).concat(ar.slice(i + 1))); 
    }
  }
  return socksToSell += sockMerchant((n - 1), ar.slice(1));
};

const countingValleys = (n, s) => {
  let numberOfValleys = 0;
  let altitude = 0;
  for (let i = 0; i < n; i ++) {
    if (s[i] === 'U') {
      altitude ++;
    }
    if (s[i] === 'D') {
      altitude --;
    }
    if (altitude === 0 && s[i] === 'U') {
      numberOfValleys ++
    }
  }
  return numberOfValleys;
}

const jumpingOnClouds = (c) => {
  let numberOfJumps = 0;
  if (c.length === 0) return numberOfJumps;
  if (c[2] === 0) {
    numberOfJumps ++;
    return numberOfJumps += jumpingOnClouds(c.slice(2));
  }
  if (c[1] === 0) {
    numberOfJumps ++;
    return numberOfJumps += jumpingOnClouds(c.slice(1));
  }
  return numberOfJumps;
}

const simpleArraySum = (ar) => {
  if (ar.length === 1) return ar[0];
  return ar[0] + simpleArraySum(ar.slice(1));
}


const compareTriplets = (a, b) => {
  let returnScore = [0, 0];
  for(let i = 0; i < a.length; i++){
    if (a[i] > b[i]) {
      returnScore[0] ++;
    }
    else if (a[i] < b[i]) {
      returnScore[1] ++;
    }
  }
  return returnScore;
}

const aVeryBigSum = (ar) => {
  if (ar.length === 1) return ar[0];
  return ar[0] + simpleArraySum(ar.slice(1));
}

const diagonalDifference = (ar) => {
  let firstSum = 0;
  let secondSum = 0;
  for(let i = 0; i < ar.length; i + 4) {
    firstSum += ar[i];
  }
  for (let i = 2; i <= 6; i + 2) {
    secondSum += ar[i];
  }
  return Math.abs(firstSum - secondSum);
}

export default {sockMerchant, countingValleys, jumpingOnClouds};