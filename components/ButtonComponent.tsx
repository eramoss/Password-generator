import { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Appcontext from "../context/AppContext";


interface ButtonProps {
  children: string
}

export function Button({children} : ButtonProps){

  const {generate, Symbol, Number, Lower, Upper, rangeValue} = useContext(Appcontext)

  const generate_pass = async () => {


    generate({
      length: rangeValue,
      numbers: Number,
      uppercase: Upper,
      symbols: Symbol,
      lowercase: Lower
    })

    console.log(Upper)

  }




  return (
    <div>
        <button onClick={generate_pass} className="p-4 bg-emerald-400 w-full flex items-center justify-center my-4 hover:bg-emerald-300" > {children} <AiOutlineArrowRight/> </button>
    </div>
    
  )
}