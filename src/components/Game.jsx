import "../index.css"
import { useEffect, useState } from "react";

const Game = ({selectedOptionPlayer1, result}) => {

    const options = ["stone", "paper", "scissors"]

    const [selectedOptionPlayer2, setSelectedOptionPlayer2] = useState("")

    useEffect(() => {
        setSelectedOptionPlayer2(options[Math.floor(Math.random() * options.length)])
        console.log(Math.floor(Math.random() * options.length))
      }, []);

    function winOrLose () {
        if(selectedOptionPlayer1 === "stone" && selectedOptionPlayer2 === "paper") {
            return "Você perdeu!"
        } else if(selectedOptionPlayer1 === "stone" && selectedOptionPlayer2 === "scissors") {
            result("win")
            return "Você ganhou!"
        } else if(selectedOptionPlayer1 === "paper" && selectedOptionPlayer2 === "scissors") {
            return "Você perdeu!"
        } else if(selectedOptionPlayer1 === "paper" && selectedOptionPlayer2 === "stone") {
            result("win")
            return "Você ganhou!"
        } else if(selectedOptionPlayer1 === "scissors" && selectedOptionPlayer2 === "stone") {
            return "Você perdeu!"
        } else if(selectedOptionPlayer1 === "scissors" && selectedOptionPlayer2 === "paper") {
            result("win")
            return "Você ganhou!"
        } else {
            return "Empate!"
        }
    }

    return (
        <div className="flex justify-around items-center text-center ml-16 mr-16">
            <div className="">
                <p>Player 1</p>
                <p className="bg-blue-300 p-4 rounded-full text-2xl">
                    {selectedOptionPlayer1}
                </p>
            </div>
            <div>
                <p>{winOrLose()}</p>
                <button>Jogar Novamente</button>
            </div>
            <div>
                <p>Player 2</p>
                <p className="bg-orange-300 p-4 rounded-full text-2xl">{selectedOptionPlayer2}</p>
            </div>
        </div>
    )
}

export default Game