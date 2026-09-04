import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { LoginUserApi } from "../api/authApi";
import {useDispatch} from "react-redux"

export const useAuth = () => {

  let Dispatch  =useDispatch()
let navigate = useNavigate()





 let {register , handleSubmit ,reset , formState:{ errors }} = useForm();



    const registerForm = (data) =>{

      console.log("reggister ",data);
    

    }

    const loginForm = async(data) =>{
   try {
      
      let responces = await LoginUserApi(data)


       

        
   } catch (error) {
    console.log(error)
   }

    }



return{
  navigate,
  register,
  loginForm,
  handleSubmit,
  registerForm,
  errors,
  reset

}

};