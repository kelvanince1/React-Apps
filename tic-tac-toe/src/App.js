import React, { useState } from 'react';

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: '500px 500px 500px',
    gridTemplateColumns: '500px 500px 500px',
    gridGap: '8px'
  },
  buttonContainer: {
    border: '20px solid #eee',
    margin: '10px'
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

    if (calculateWinner(boardSquares) || squares[index]) return;

    if (squares[index]) return;

    squares[index] = suitX ? 'X' : 'O';

    setBoardSquares(squares);

    setSuit(!suitX);
  }

  const renderSquare = index => {
    return <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
  }

  let status;
  const winner = calculateWinner(boardSquares);

  status = winner ? `Winner is ${winner}` : `Next player: ${suitX ? 'X' : 'O'}`;

  return (
    <div>
      <div>{status}</div>
      <div>{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
      <div>{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
      <div>{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
    </div>
  )
}

// FUNCTION CALCULATING WINNER
const calculateWinner = (squares) => {
  const winningLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
