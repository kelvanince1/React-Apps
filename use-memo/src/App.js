import React, { useState, useMemo } from 'react';

import { useFetch } from './useFetch';

const computeLongestWord = (arr) => {
  if (!arr) {
    return [];
  }

  console.log('Computing');

  let longest = '';

  arr.forEach(item => item.title.split(' ').forEach(word => {
    if (word.length > longest.length) {
      longest = word;
    }
  }));

  return longest;
}

const App = () => {
  const [count, setCount] = useState(0);

  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos'); 

  const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>{longestWord}</div>
    </div>
  );
}

export default App;