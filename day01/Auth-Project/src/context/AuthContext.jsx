import { createContext, useState } from "react";

export const Auth = createContext();


export const AuthProvider = ({children})=>{

  const [ragisterUser , setRegisterUser] = useState(JSON.parse(localStorage.getItem("register user")) ||[]);

  const [loggedUser , setLogeedtUser] = useState(JSON.parse(localStorage.getItem("loginUser")));

  return <Auth.Provider value={{ragisterUser , setRegisterUser ,loggedUser,setLogeedtUser}}>
    {children}
  </Auth.Provider>
}