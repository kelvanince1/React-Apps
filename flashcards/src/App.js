import React, { useState, useEffect, useRef } from 'react';

import './app.css';
import List from './List';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);
 
  const categoryEle = useRef();
  const amountEle = useRef();

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(res => res.json())
      .then(data => {
        setCategories(data.trivia_categories)
      })
  }, []);

  useEffect(() => {
    
  }, []);

  const decodeStr = (str) => {
     const text = document.createElement('textarea');
     text.innerHTML = str;

     return text.value;
  }
  
  const handleSubmit = e => {
    e.preventDefault();

    fetch(
      `https://opentdb.com/api.php?amount=${amountEle.current.value}&category=${categoryEle.current.value}`
    )
        .then(res => res.json())
        .then(data => {
          setFlashcards(data.results.map((question, i) => {
            const answer = decodeStr(question.correct_answer);
            const options = [
              ...question.incorrect_answers.map(a => decodeStr(a)),
              answer
            ];
            
          return {
            id: `${i}-${Date.now()}`,
            question: decodeStr(question.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }
        }))
      })
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Cateogy</label>
          <select id="category" ref={categoryEle}>
            {
              categories.map(category => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))
            }
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEle} />
        </div>
        
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>

      <div className="container">
        <List
          flashcards={flashcards}
        />
      </div>
    </>
  );
}

export default App;
