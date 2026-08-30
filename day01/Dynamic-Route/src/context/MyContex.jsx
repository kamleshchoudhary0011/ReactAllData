import { createContext, useState } from "react"; 

export const MyStore = createContext();


export const ContexProvider =({children})=>{

const [ProductDate , setProductDate] = useState([])


  return <MyStore.Provider  value={{ProductDate , setProductDate}}>

{children}
  </MyStore.Provider>


}