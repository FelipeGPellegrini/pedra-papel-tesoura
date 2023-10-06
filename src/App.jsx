import { useState, useEffect } from 'react'
import './App.css'
import Game from './components/Game'
import Header from './components/Header'
import Play from './components/Play'

function App() {

  const [OptionPlayer1, setOptionPlayer1] = useState("")
  const [result, setResult] = useState("")

  function selectOptionPlayer1 (option) {
    setOptionPlayer1(option)
  }


  function changeResult(r) {
    setResult(r)
  }
  
  return (
    <>
      <Header result={result}/>
      <Play selectOption={selectOptionPlayer1}/>
      <Game selectedOptionPlayer1={OptionPlayer1} result={changeResult}/>
    </>
  )
}

export default App
