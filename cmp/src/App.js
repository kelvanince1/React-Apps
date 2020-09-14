import React, {useState} from 'react';

function App() {
  const [idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx(idx + 1);
  }

  console.log('IDX', idx);

  return (
    <div className="App">
      <button onClick={() => handleClick()}>Click Me</button>
    </div>
  );
}

export default App;
