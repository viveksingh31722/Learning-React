import { useEffect, useState } from "react"


function App() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem('bgColor') || 'olive';
  });

  useEffect(() => {
    localStorage.setItem('bgColor', color) // This is exceptional for this project, because i want to persist the bgcolor.
  }, [color]);

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style = {{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl ">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style = {{background: "red"}} onClick={() => setColor('red')}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style = {{background: "green"}} onClick={() => setColor('green')}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style = {{background: "blue"}}
            onClick={() => setColor('blue')}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style = {{background: "lavender"}}
            onClick={() => setColor('lavender')}>Lavender</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style = {{background: "#84acce"}}
            onClick={() => setColor('#84acce')}>Carolina Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style = {{background: "#d7d9b1"}}
            onClick={() => setColor('#d7d9b1')}>Vanilla</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style = {{background: "#512500"}}
            onClick={() => setColor('#512500')}>Seal brown</button>
             <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style = {{background: "yellow"}}
            onClick={() => setColor('yellow')}>Yellow</button>
             <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style = {{background: "olive"}}
            onClick={() => setColor('olive')}>Olive</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
