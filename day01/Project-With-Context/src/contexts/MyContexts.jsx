import {  createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({children}) =>{

  const [isCardOpen , setIsCardOpen] = useState(false);
    const [cardItems , setcardItems] = useState([]);




  return <MyStore.Provider value={{isCardOpen , setIsCardOpen , cardItems ,setcardItems}}>

    {children}
  </MyStore.Provider>

};
