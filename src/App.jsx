import { useState } from "react"
import Board from "./Components/Board"
function App() {
  const [game, setGame] = useState(Array(9).fill(null));

  function handleGame(){
    setGame(Array(9).fill(null))
  }
  return (
    <>
    <div className="font-rubik ">
      <h1 className="text-center text-5xl text-white p-10"> Tic Tac Toe</h1>
   
    <div>
      <Board gameStart={game} handleGame={handleGame}/>
    </div>
    <div className="flex items-center justify-center text-zinc-700 text-sm">
    <footer className="fixed bottom-0 ">
      <h1 className="">©Made by Muhammad Hassam</h1> 
   </footer>
    </div>
   
    </div>
    </>
  )
}

export default App
