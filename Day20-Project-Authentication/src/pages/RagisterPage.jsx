import React from "react";

import { useAuth } from "../hooks/AuthHoks";

const RagisterPage = () => {

  const {navigate, register,
      handleSubmit,
      reset,
      registerForm,
      errors,} = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Register your new account
          </p>
        </div>

        {/* Form */}
        <form  onSubmit={handleSubmit(registerForm)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
            {
              ...register("name" ,{
                required:"name is required"
              })
            }
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
         {errors.name &&  <p className="text-red-600">{errors.name.message}</p>}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
            {
              ...register("email" , {
                required:"email is required"
              })
            }
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          {errors.email  && <p>{errors.email.message}</p>}
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
            {
              ...register("password" ,{
                required:"Password is required"
              })
            }
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          {errors.password && <p>{errors.password.message}</p>}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Register
          </button>

        </form>

        {/* Login */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <button
            onClick={()=>navigate("/")}
              type="button"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>

      </div>

    </div>
  );
};

export default RagisterPage;