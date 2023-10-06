import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Header from './components/Header'
import Play from './components/Play'

function App() {

  const [OptionPlayer1, setOptionPlayer1] = useState("")

  function selectOptionPlayer1 (option) {
    setOptionPlayer1(option)
    console.log(OptionPlayer1)
  }
  

  return (
    <>
      <Header/>
      <Play selectOption={selectOptionPlayer1}/>
      <Game/>
    </>
  )
}

export default App
