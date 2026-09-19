import React from "react";
import { useAuth } from "../../hooks/useAuthHooks";


const Login = () => {
  // React Hook Form setup
  let { register,navigate,
    handleSubmit,
    onLoginSumbit,
    errors, } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      {/* Login Card */}
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

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onLoginSumbit)}
          className="space-y-5"
        >

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-xl border outline-none transition
                ${
                  errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {/* Email Error */}
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>

              <a
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-xl border outline-none transition
                ${
                  errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            {/* Password Error */}
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 accent-blue-600"
            />

            <label
              htmlFor="remember"
              className="text-sm text-gray-600"
            >
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200"
           
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{" "}

          <span 
           onClick={()=>navigate("/ragister")}
            // href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;