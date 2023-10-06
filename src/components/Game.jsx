import "../index.css"

const Game = () => {
    return (
        <div className="flex justify-around items-center text-center ml-16 mr-16">
            <div className="">
                <p>Player 1</p>
                <p className="bg-blue-300 p-4 rounded-full text-2xl">✊</p>
            </div>
            <div>
                <p>Você perdeu</p>
                <button>Jogar Novamente</button>
            </div>
            <div>
                <p>Player 2</p>
                <p className="bg-orange-300 p-4 rounded-full text-2xl">✊</p>
            </div>
        </div>
    )
}

export default Game