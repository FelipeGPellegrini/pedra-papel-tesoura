import "../index.css"

const Play = ({selectOption}) => {

    return (
        <div className="flex justify-center text-6xl mt-20">
                <div><p onClick={() => {
                    selectOption("stone")
                }} className="bg-blue-300 p-8 rounded-full cursor-pointer">✊</p></div>
                <div className="m-20 mt-40"><p  onClick={() => {
                    selectOption("paper")
                }} className="bg-blue-300 p-8 rounded-full cursor-pointer">🖐️</p></div>
                <div><p className="bg-blue-300 p-8 rounded-full cursor-pointer" onClick={() => {
                    selectOption("scissors")
                }}>✌️</p></div>
        </div>
    )
}

export default Play