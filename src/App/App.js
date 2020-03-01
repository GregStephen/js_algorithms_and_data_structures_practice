import React from 'react';
import './App.css';

import ProblemSolvingPatterns from './ProblemSolvingPatterns';

function App() {
 console.error('same([1,2,3,2], [9,1,4,4])', ProblemSolvingPatterns.same([1,2,3,2], [9,1,4,4]));
 console.error('same([1,2,2,2], [9,1,1,1])', ProblemSolvingPatterns.same([1,2,2,2], [9,1,1,1]));
 console.error('validAnagram(hello, lloeh)', ProblemSolvingPatterns.validAnagram('hello', 'lloeh'));
 console.error('validAnagram(bloop lloeh)', ProblemSolvingPatterns.validAnagram('bloop', 'lloeh'));
 console.error('countUniqueValues([1,2,2,5,7,7,99])', ProblemSolvingPatterns.countUniqueValues([1,2,2,5,7,7,99]));
 console.error('maxSubarraySum([2,6,9,2,1,8,5,6,3],3)', ProblemSolvingPatterns.maxSubarraySum([2,6,9,2,1,8,5,6,3],3));
  return (
    <div className="App">
    </div>
  );
}

export default App;
