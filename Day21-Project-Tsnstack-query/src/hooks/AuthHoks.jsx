import { useNavigate } from "react-router";

import {useForm} from "react-hook-form"
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../Feature/AuthSlice";

export const useAuth = () =>{
  
  let Dispatch = useDispatch();

  const [registerUser, setRagisterUser] = useState(JSON.parse(localStorage.getItem('registerUsers')) || []
) 



  console.log(registerUser)

    let navigate = useNavigate();

    let {register , handleSubmit ,reset , formState:{ errors }} = useForm();



    const registerForm = (data) =>{

      console.log("/////////",data);
    let arr = [...registerUser , data]
    
    
      setRagisterUser(arr);

      localStorage.setItem('registerUsers' , JSON.stringify(arr));


      toast.success("user ragister sucsess full")






    }

    const loginForm = (data) =>{
  //  console.log(data);
     let user = registerUser.find((val)=>{
       return val.email === data.email 
       &&
       val.password === data.password
     })

     if (!user) {
      toast.error("invalid Users")
      return;
     }

     Dispatch(addUser(user));

     localStorage.setItem("logdInUser",JSON.stringify(user));
     

     toast.success("user Logged In ")

     reset();

     

    }

    

    return{
      navigate,
      register,
      handleSubmit,
      reset,
      errors,
      registerForm,
      loginForm

    }
}
