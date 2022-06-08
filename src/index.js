import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const Square = (props) => {
  return ( <div className='square'>
    {props.value}
  </div> );
}
 

const Board = () => {
  const renderSquare = (i) => {
    return ( <Square value={i} /> );
  }
  
  return ( <div style={{
    backgroundColor: 'skyblue',
    margin: 10,
    padding: 20,
  }}>
    Board
    <div className='board-row'>
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className='board-row'>
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className='board-row'>
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>


  </div> );
}
 
// export default Board;

const Game = () => {
  return ( <div className='game' >
    Game
  <Board />
  </div> );
}
 
export default Game;

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)