import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const {loggedUser , ragisterUser,setLogeedtUser} = useContext(Auth);
  let Navigate = useNavigate()

    
  
    let {register ,handleSubmit , reset , formState:{errors}} = useForm();
  
    let formSumbit = (data) =>{
     let user = ragisterUser.find((val) =>{

      return val.email === data.email && val.password === data.password
     }) 

     if (!user) {
      toast.error("user not found or invalid cresancials  ");
      reset();
      
      return;

     }

     setLogeedtUser(user);
     localStorage.setItem("loginUser" , JSON.stringify(user) )

     toast.success("user ?Login");
     navigate("/main")


      reset();
  
    }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(formSumbit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
            {...register("email",{
              required:"email is required"
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {
              errors.email &&(<p className="text-rose-500"> {errors.email.message}</p>)
            }
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
             {...register("password",{
              required:"password is required"
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {
              errors.password &&(<p className="text-rose-500"> {errors.password.message}</p>)
            }
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <button
            onClick={()=> Navigate("register")}
              type="button"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </button>
          </p>
        </div>

      </div>

    </div>
  );
};

export default LoginPage;