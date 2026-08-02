import { createContext, useState } from "react";

export const MyStore = createContext();
  
 export const ConetxtProvider = ({children}) =>{

  const [count , setCoun] = useState(0)

  return <MyStore.Provider value={{count , setCoun}}>
    {children}
  </MyStore.Provider>


}