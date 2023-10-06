import { useState, useEffect } from "react"
import "../index.css"

const Header = ({result}) => {

  const [score, setScore] = useState(0)

  useEffect(() => {
    setScore(score + 1)
  }, [result]);


  return (
    <header className='flex justify-around text-center m-10 font-indieflower text-2xl border-2 p-8 rounded-xl border-black'>
        <div className="p-8">
          <p>Pedra</p>
          <p>Papel</p>
          <p>Tesoura</p>
        </div>
        <div className="border-2 p-8 rounded-xl border-black">
          <p>Score</p>
          <p>{score}</p>
        </div>
      </header>
  )
}

export default Header