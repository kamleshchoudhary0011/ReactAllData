// import React, { useState } from 'react'
// import {useDispatch,useSelector} from "react-redux"
// import { dcrement, increment, incrementByValue } from '../Feature/CounterSlice';

// const LoginPage = () => {
//   const {count} = useSelector((store)=>store.counter);

//   const Dispatch = useDispatch();

//   const [inpVaue , setImpValue] = useState(0);



//   return (
//     <div>
//      <h1>{count}</h1>
//      <button onClick={()=>Dispatch(increment())}>increment</button>
//      <button onClick={()=>Dispatch(dcrement())}>Decrement</button>
//      <input type="text" placeholder='enter count'onChange={(e)=>setImpValue(e.target.value)}/>
//      <button onClick={()=>Dispatch(incrementByValue(inpVaue))}>Add to count</button>
//     </div>
//   )
// }

// export default LoginPage
import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/AuthHoks";

const LoginPage = () => {

  let {navigate , register,
      handleSubmit,
      loginForm,

      reset,
      errors,} = useAuth();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form  onSubmit={handleSubmit(loginForm)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
            {
              ...register("email",{
                required:"email is requires"
              })
            }
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          {errors.email && <p> {errors.email.message}</p>}

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
            {
              ...register("password",{
                required:"invalid password"
              })
            }
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          {errors.password && <p> {errors.password.message}</p>}

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
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <button onClick={()=>navigate('/register')}
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