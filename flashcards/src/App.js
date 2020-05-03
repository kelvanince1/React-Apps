import React, { useState } from 'react';

import List from './List';

function App() {
  const [flashcards, setFlashcards] = useState(samples);
  return (
    <div>
      <List
        flashcards={flashcards}
      />
    </div>
  );
}

const samples = [
  {
    id: 1,
    question: 'What is the capital of England',
    answer: 'London',
    options: ['Liverpool', 'Bristol', 'London', 'Manchester']
  },
  {
    id: 2,
    question: 'Question 2',
    answer: '2',
    options: ['1', '2', '3', '4']
  }
];

export default App;
