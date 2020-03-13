import React from 'react';
import './App.css';

import ProblemSolvingPatterns from './ProblemSolvingPatterns';
import HackerRank from './HackerRank';

function App() {
 console.error('same([1,2,3,2], [9,1,4,4])', ProblemSolvingPatterns.same([1,2,3,2], [9,1,4,4]));
 console.error('same([1,2,2,2], [9,1,1,1])', ProblemSolvingPatterns.same([1,2,2,2], [9,1,1,1]));
 console.error('validAnagram(hello, lloeh)', ProblemSolvingPatterns.validAnagram('hello', 'lloeh'));
 console.error('validAnagram(bloop lloeh)', ProblemSolvingPatterns.validAnagram('bloop', 'lloeh'));
 console.error('countUniqueValues([1,2,2,5,7,7,99])', ProblemSolvingPatterns.countUniqueValues([1,2,2,5,7,7,99]));
 console.error('maxSubarraySum([2,6,9,2,1,8,5,6,3],3)', ProblemSolvingPatterns.maxSubarraySum([2,6,9,2,1,8,5,6,3],3));
 console.error('averagePair([1,2,3], 2.5)', ProblemSolvingPatterns.averagePair([1,2,3], 2.5));
 console.error('averagePair([1,3,3,5,6,7,10,12,19], 8)', ProblemSolvingPatterns.averagePair([1,3,3,5,6,7,10,12,19], 8));
 console.error('averagePair([], 2.5)', ProblemSolvingPatterns.averagePair([], 2.5));
 console.error('averagePair([-1,0,3,4,5,6], 4.1)', ProblemSolvingPatterns.averagePair([-1,0,3,4,5,6], 4.1));
console.error('15, [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5]', HackerRank.sockMerchant(15, [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5]));
console.error('counting valleys, 8, UDDDUDUU', HackerRank.countingValleys(8, 'UDDDUDUU'));
  return (
    <div className="App">
    </div>
  );
}

export default App;
