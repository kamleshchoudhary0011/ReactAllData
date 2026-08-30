import { createContext } from "react";

// STAPE FRIST CREATE STORE 
const MyStore = createContext();


// SECOND STEP CREATE PROVIDER
export const ContextProviderD = ({children}) => {

  return  <MyStore.Provider>
{
  children
}


  </MyStore.Provider>

};


// mack a folder 
// create a sotre
// mack a provider 
// axis childran 
// .Provider 
// hold all data inside contect provider 