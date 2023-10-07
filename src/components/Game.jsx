import "../index.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({selectedOptionPlayer1}) => {

    const [score, setScore] = useState(0)

    const options = ["stone", "paper", "scissors"]

    const [selectedOptionPlayer2, setSelectedOptionPlayer2] = useState("")

    const [optionPlayer1Image, setOptionPlayer1Image] = useState("")

    const [optionPlayer2Image, setOptionPlayer2Image] = useState("")

    useEffect(() => {
        setSelectedOptionPlayer2(options[Math.floor(Math.random() * options.length)])
        if(selectedOptionPlayer1 === "stone") {
            setOptionPlayer1Image("✊")
        } else if (selectedOptionPlayer1 === "paper") {
            setOptionPlayer1Image("🖐️")
        } else if (selectedOptionPlayer1 === "scissors") {
            setOptionPlayer1Image("✌️")
        }
      }, [selectedOptionPlayer1]);

      useEffect(() => {
        if(selectedOptionPlayer2 === "stone") {
            setOptionPlayer2Image("✊")
        } else if (selectedOptionPlayer2 === "paper") {
            setOptionPlayer2Image("🖐️")
        } else if (selectedOptionPlayer2 === "scissors") {
            setOptionPlayer2Image("✌️")
        }
      }, [selectedOptionPlayer2])


    function winOrLose () {
        if(selectedOptionPlayer1 === "stone" && selectedOptionPlayer2 === "paper") {
            return "Você perdeu!"
        } else if(selectedOptionPlayer1 === "stone" && selectedOptionPlayer2 === "scissors") {
            return "Você ganhou!"
        } else if(selectedOptionPlayer1 === "paper" && selectedOptionPlayer2 === "scissors") {
            return "Você perdeu!"
        } else if(selectedOptionPlayer1 === "paper" && selectedOptionPlayer2 === "stone") {
            return "Você ganhou!"
        } else if(selectedOptionPlayer1 === "scissors" && selectedOptionPlayer2 === "stone") {
            return "Você perdeu!"
        } else if(selectedOptionPlayer1 === "scissors" && selectedOptionPlayer2 === "paper") {
            return "Você ganhou!"
        } else {
            return "Empate!"
        }
    }



    return (
        <div className="flex justify-around items-center text-center ml-16 mr-16">
            <div className="">
                <p className="text-2xl p-4">Player 1</p>
                <p className="bg-blue-300 p-8
                 rounded-full text-4xl">
                    {optionPlayer1Image}
                </p>
            </div>
            <div className="text-2xl p-4">
                <p>{winOrLose()}</p>
                <p className="cursor-pointer bg-slate-400 p-2 m-4 rounded">
                    <Link to="/play">Jogar Novamente</Link>
                </p>
            </div>
            <div>
                <p className="text-2xl p-4">Player 2</p>
                <p className="bg-orange-700 p-8 rounded-full text-4xl">{optionPlayer2Image}</p>
            </div>
        </div>
    )
}

export default Game