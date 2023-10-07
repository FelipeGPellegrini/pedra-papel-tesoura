import "../index.css"
import { Link } from "react-router-dom"
import Footer from "./Footer"

const Play = ({ selectOption }) => {

    return (
        <>
            <div className="flex justify-center text-6xl mt-8">
                <div><p onClick={() => {
                    selectOption("stone")
                }} className="bg-blue-300 p-8 rounded-full cursor-pointer"><Link to="/game">✊</Link></p></div>
                <div className="m-20 mt-40"><p onClick={() => {
                    selectOption("paper")
                }} className="bg-blue-300 p-8 rounded-full cursor-pointer"><Link to="/game">🖐️</Link></p></div>
                <div><p className="bg-blue-300 p-8 rounded-full cursor-pointer" onClick={() => {
                    selectOption("scissors")
                }}><Link to="/game">✌️</Link></p></div>
            </div>
            <Footer/>
        </>
    )
}

export default Play