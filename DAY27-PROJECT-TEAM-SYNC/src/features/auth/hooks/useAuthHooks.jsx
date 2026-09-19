import { useForm } from "react-hook-form";
import {useNavigate} from "react-router"
import {useDispatch} from "react-redux"
import { loginEmploye } from "../state/auth/authAction";

export let useAuth = () =>{

  let navigate = useNavigate();

let Dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submit hone par ye function chalega
  const onRagisterSumbit = (data) => {
   console.log("Login Data:", data);
  };
  const onLoginSumbit = (data) => {
    

    Dispatch(loginEmploye(data))
    console.log("Login Data:", data);
  };


  return {  register,
  handleSubmit,
  errors,
  onRagisterSumbit,
  onLoginSumbit
 , navigate
  }

}