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

const Square = () => {
  return ( <div style={{
    backgroundColor: 'gold',
    margin: 10,
    padding:20,
  }}>
    Square
  </div> );
}
 

const Board = () => {
  return ( <div style={{
    backgroundColor: 'skyblue',
    margin: 10,
    padding: 20,
  }}>
    Board
  <Square />

  </div> );
}
 
// export default Board;

const Game = () => {
  return ( <div style={{
  backgroundColor: 'salmon',
  margin: 10,
  padding: 20,}} >
    Game
  <Board />
  </div> );
}
 
export default Game;

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)