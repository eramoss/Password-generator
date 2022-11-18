import { useContext } from "react"
import Appcontext from "../context/AppContext"

export const InpuComponent = () => {

  const {rangeValue, changeRange} = useContext(Appcontext)

  return (
    <header className="flex flex-col w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-sm text-white">Character Lenght</h1>
            <h1 className="text-emerald-400 text-2xl" >{rangeValue}</h1> 
          </div>

          <input className="w-full my-2 "
          type="range" min="0" value={rangeValue} onChange={(e) => changeRange(e.target.value)} max="50">
          </input>
              
    </header>
  )
}