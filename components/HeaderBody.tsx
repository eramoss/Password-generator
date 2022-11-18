import { useContext, useState } from "react";
import { AiOutlineBlock } from "react-icons/ai";
import Appcontext from "../context/AppContext";


export function HeaderBody(){
  
  
  const {PasswordState} = useContext(Appcontext)
  const  {modalWindow} = useContext(Appcontext)


  const copy_pass = () => {
    navigator.clipboard.writeText(PasswordState)
    const Modal = modalWindow
  } 



  return (


      <div className="flex bg-gray-800 rounded w-full p-4  justify-between items-center">
        <h1 className='fixed top-0 opacity-0 text-emerald-300 translate-x-28 transition'> Copying to clipboard was successful! </h1>
        <h1 className={`max-w-xs flex text-gray-600 text-2xl opacity-80 overflow-hidden flex-nowrap `}>{PasswordState}</h1>
        <a onClick={copy_pass}><AiOutlineBlock className="text-emerald-400 text-2xl hover:cursor-pointer"></AiOutlineBlock></a>
      </div>

    
  )
}
