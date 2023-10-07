import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Header from './components/Header'
import Play from './components/Play'

import { Route, Routes } from 'react-router-dom'

function App() {

  const [OptionPlayer1, setOptionPlayer1] = useState("")

  function selectOptionPlayer1 (option) {
    setOptionPlayer1(option)
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/play" element={<Play selectOption={selectOptionPlayer1}/> }/>
        <Route path="/game" element={<Game selectedOptionPlayer1={OptionPlayer1}/>}/>
      </Routes>
    </>
  )
}

export default App
