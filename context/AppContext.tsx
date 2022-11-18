const generator = require("generate-password")
import React, { useState } from "react";
import { createContext } from "react";


interface AppcontextData {
  generate(configs: object): void
  rangeValue: string;
  changeRange(p: string): void
  PasswordState: string;
  error: string;
  modalWindow(): void
  Upper: boolean
  Lower: boolean
  Number: boolean
  Symbol: boolean
  CheckUpper(): void
  CheckLower(): void
  CheckNumber(): void
  CheckSymbol(): void
}



interface Props {
  children: React.ReactNode
}

const Appcontext = createContext<AppcontextData>({} as AppcontextData);

export const AppProvider: React.FC<Props> = ({children}) => {

  //to generate the password
  const [ PasswordState, setPasswordState]  = useState('P4$5W0rD')
  const [error, setError] = useState('')
  const generate = (configs: object) => {

    if(Upper === false && Lower === false && Number === false && Symbol === false) {
      setError('The CheckBoxes must be checked 1 at least')
      return
    }
    console.log(configs)
    const RangePass = parseInt(rangeValue)
   


    const password = generator.generate(
        configs
      )


    if(RangePass <= 5){
      setError('Password must be at least 5 characters.')
      
      return

    }
    setPasswordState(password)
    setError('')
  }


  // to change range of characters
  const [rangeValue , setRangeValue] = useState('0')
  const changeRange = (p: string) => {
    setRangeValue(p)
  }

  // to set configuration of chackboxes

  const [Upper, setUpper] = useState(true)
  const [Lower, setLower] = useState(true)
  const [Number, setNumber] = useState(true)
  const [Symbol, setSymbol] = useState(true)

  const CheckUpper = () => {
    if (Upper === true) {
      setUpper(false)
    } else {
      setUpper(true)
    }
  }

  const CheckLower = () => {
    if (Lower === true) {
      setLower(false)
    }else {
      setLower(true)
    }
  }

  const CheckNumber = () => {
    if (Number === true) {
      setNumber(false)
    }else {
      setNumber(true)
    }
  }

  const CheckSymbol = () => {
    if (Symbol === true) {
      setSymbol(false)
    } else {
      setSymbol(true)
    }
  }




  // to set a modal window when password is copied to clipboard

  const [isCopied, setIsCopied] = useState(false)
 
  

  const modalWindow = () => {
    setIsCopied(true)
  }



  return(
    <Appcontext.Provider  value={ {generate, rangeValue, changeRange, PasswordState, error, modalWindow,Lower,Number,Symbol,Upper, CheckLower,CheckNumber,CheckSymbol,CheckUpper} }>
      {children}
    </Appcontext.Provider>

  )
}

export default Appcontext;