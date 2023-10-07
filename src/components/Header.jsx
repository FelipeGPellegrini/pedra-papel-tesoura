import "../index.css"

const Header = () => {


  return (
    <header className='flex justify-around text-center m-8 mt-2 font-indieflower text-2xl border-2 p-4 rounded-xl border-black'>
        <div className="p-4">
          <p>Pedra</p>
          <p>Papel</p>
          <p>Tesoura</p>
        </div>
        <div className="border-2 p-8 rounded-xl border-black">
          <p>Score</p>
          <p>0</p>
        </div>
      </header>
  )
}

export default Header