import React, { useContext } from "react";
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { Auth } from "../context/AuthContext";


const RegisterPage = () => {

  const {ragisterUser,setRegisterUser} = useContext(Auth);
  let Navigate = useNavigate()  

  let {register ,handleSubmit , reset , formState:{errors}} = useForm();

  let formSumbit = (data) =>{
    let arr = [...ragisterUser , data]
  setRegisterUser(arr)

     alert("user ragister SuccesFully ");


     localStorage.setItem("register user",JSON.stringify(arr))



    // console.log(data);
    reset

  }



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-500">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Register your new account
          </p>
        </div>

        {/* Register Form */}
        <form
        onSubmit={handleSubmit(formSumbit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
            {
              ...register("name",{
                required:"Name is required "
              })
            }
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-600 font-bold">{errors.name.message}</p> }
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
            {
              ...register("email", {
                required:"Email is required "
              })
            }
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {
              errors.email && <p className="text-red-600 font-bold">{errors.email.message}</p>
            }
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
            {
              ...register("password",{
                required:"Password is required "
              })
            }
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {
              errors.password && <p className="text-red-600 font-bold">{errors.password.message}</p>
            }
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-600 font-semibold hover:underline"
              onClick={(()=>Navigate("/"))}
            >
              Login
            </button>
          </p>
        </div>

      </div>

    </div>
  );
};

export default RegisterPage;