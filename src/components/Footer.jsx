import { useState } from "react"
import "../index.css"

const Footer = () => {

    const [showRules, setShowRules] = useState(false)

    return (
        <div className='flex flex-col text-center'>
            <button className="cursor-pointer bg-slate-400 p-2 rounded w-20 mt-10 m-auto" onClick={() => {
                    setShowRules(true)
            }}>Regras</button>
            <div className={showRules ? "fixed inset-0 flex items-center justify-center z-50" : "hidden"}>
            <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className={"bg-gray-400 w-65 h-500 overflow-y-auto text-center text-white p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl text-lg h-2/3"}>
                <p className="text-left cursor-pointer" onClick={() => {
                    setShowRules(false)
                }}>X</p>
                    <p>
                        1. Os jogadores devem simultaneamente esticar a mão, na qual
                        cada um formou um símbolo (que significa pedra, papel ou
                        tesoura).
                    </p>
                    <p>
                        2. Então, os jogadores comparam os símbolos para decidir quem
                        ganhou, da seguinte forma:
                        <p>- Pedra ganha da tesoura (amassando-a ou quebrando-a).</p>
                        <p>- Tesoura ganha do papel (cortando-o).</p>
                        <p>- Papel ganha da pedra (embrulhando-a).</p>
                    </p>
                    <p>3. Caso dois jogadores façam o mesmo gesto, ocorre um
                        empate, e geralmente se joga de novo até desempatar.</p>
                </div>
            </div>
            <p className="mt-8">Developed by <a href="https://github.com/FelipeGPellegrini" target="_blank" rel="noreferrer">Felipe Pellegrini</a></p>
        </div>
    )
}

export default Footer