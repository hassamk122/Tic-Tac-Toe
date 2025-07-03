import { useState } from "react";

import { RotateCcw } from "lucide-react"
function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="border w-20 h-20 flex items-center justify-center font-rubik font-bold bg-zinc-400"
    >
      {value ==="X"?<span className="text-red-500 text-3xl">X</span> : value === "O"?<span className="text-sky-500 text-3xl"  >O</span>:""}
    </button>
  );
}

export default function Board() {

  function handleGame(){
    setGame(Array(9).fill(null))
  }
  const [XIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function RestartGame(){
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    if (XIsNext) {
      nextSquare[i] ="X";
    } else {
      nextSquare[i] = "O";
    }
    setXIsNext(!XIsNext);
    setSquares(nextSquare);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = <h1 className="text-zinc-200" >Winner: <span className="text-green-500">{winner}</span></h1>;
  }else{
    status =(XIsNext?<h1 className="text-zinc-200">Player Move: <span className="text-red-500">X</span></h1> :<h1 className="text-zinc-200">Player Move:<span className="text-sky-500"  >O</span></h1>);
  }

  return (
    <div className="flex flex-col items-center ">
    <div className="font-rubik flex items-center text-3xl">{status}</div>
      <div className="flex items-center justify-center">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="flex items-center justify-center">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="flex items-center justify-center">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
       <div className="flex items-center justify-center gap-4 p-5">
      <button className="px-3 py-1 bg-zinc-700 text-white flex items-center gap-2" onClick={RestartGame} >Restart<RotateCcw  className="w-5 h-5"/></button>
    </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && 
        squares[a] == squares[b] && 
        squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}
