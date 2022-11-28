
import { Button } from "../components/ButtonComponent";
import {CheckboxComponent} from "../components/Checkbox";
import { HeaderBody } from "../components/HeaderBody";
import { StrengthPass } from "../components/StrenghtComponent/StrengthPass";
import { useContext, useState } from "react";
import { InpuComponent } from "../components/InputComponent";
import Appcontext from "../context/AppContext";
import { ModalCopy } from "../components/ModalCopy";




export default function Home() {
  


  const {error,CheckLower,CheckNumber,CheckSymbol,CheckUpper } = useContext(Appcontext)


  return (
    <div className='flex justify-center items-center w-screen h-screen bg-slate-900 font-bold'>
     
      <div className="  fixed -right-36 top-4 ">
        <ModalCopy/>
      </div>
        

      
      
      <div className="w-96 h-auto flex flex-col gap-4">
          
        <HeaderBody/>

        <main className="flex flex-col justify-evenly  bg-slate-800    h-full w-full rounded p-4 ">
          
        

  
          <h1 className="text-red-700 " >{error}</h1>
          <InpuComponent/>

        


          <div className="text-sm text-white my-4 flex flex-col gap-2">
            <a onClick={CheckUpper}>     
              <CheckboxComponent id='Upper' > Include Uppercase Letters </CheckboxComponent>
            </a>
            
            <a onClick={CheckLower}>
              <CheckboxComponent  id='Lower' > Include Lowercase Letters </CheckboxComponent>
            </a>
            
            <a onClick={CheckNumber}>
              <CheckboxComponent  id="Number" > Include Numbers </CheckboxComponent>
            </a>
            
            <a onClick={CheckSymbol}>
              <CheckboxComponent  id="Symbol" > Include Symbols </CheckboxComponent>
            </a>
          </div>


          <div>
            <StrengthPass/>
            <Button> GENERATE </Button>
          </div>

        </main>
      </div>
    </div>
  )
}
