import { useContext, useState } from "react";
import { AiOutlineBlock } from "react-icons/ai";
import Appcontext from "../context/AppContext";


export function HeaderBody(){
  
  
  const {PasswordState} = useContext(Appcontext)
  const  {setapearModal} = useContext(Appcontext)


  const copy_pass = () => {
    setapearModal(<div className=" bg-emerald-400 rounded  text-sm p-2 -translate-x-40 transition" ><h1> password copied successfully! </h1></div>)
    navigator.clipboard.writeText(PasswordState)
    setTimeout(() => {
       setapearModal(<div className=" bg-emerald-400 rounded  text-sm p-2 translate-x-40 transition" ><h1> password copied successfully! </h1></div>)
    },2000)
  } 



  return (


      <div className="flex bg-gray-800 rounded w-full p-4  justify-between items-center">
        <h1 className={`max-w-xs flex text-gray-600 text-2xl opacity-80 overflow-hidden flex-nowrap `}>{PasswordState}</h1>
        <a onClick={copy_pass}><AiOutlineBlock className="text-emerald-400 text-2xl hover:cursor-pointer"></AiOutlineBlock></a>
      </div>

    
  )
}
