import React, { useState } from 'react';

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: '200px 200px 200px',
    gridTemplateColumns: '200px 200px 200px',
    gridGap: '5px'
  },
  buttonContainer: {
    border: '2px solid #eee'
  }
}

function App() {
  return (
    <div style={styles.container}>
      <Board />
    </div>
  );
}

export default App;


// SQUARE COMPONENT
// --> value(prop)
// --> onClick(prop)
const Square = props => {
  return <button style={styles.buttonContainer} onClick={props.onClick}>{props.value}</button>
}


// BOARD COMPONENT
// == STATE
// == --> boardState
// == --> turnState
// --> handleClick
// -- --> Handle click edits board state (Add X or O).
// -- --> Copy board state and mutate that copy. Set state of board. 
// -- --> IF -- index of board is filled, return.
// -- --> Calculate next turn (setting state of turn)
const Board = () => {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [suitX, setSuit] = useState(true);

  const handleClick = index => {
    const squares = [...boardSquares];

    if (squares[index]) return;

    squares[index] = suitX ? 'X' : 'O';

    setBoardSquares(squares);

    setSuit(!suitX);
  }

  const renderSquare = index => {
    return <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
  }

  return (
    <div>
      <div>{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
      <div>{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
      <div>{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
    </div>
  )
}

// FUNCTION CALCULATING WINNER
