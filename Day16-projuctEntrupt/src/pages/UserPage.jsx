import React, { useEffect, useState } from 'react'
import axios from "axios"
const UserPage = () => {
  
  const [userData , setUserData] = useState([])

console.log(userData);

  let getUserData = async()=>{
    try {

      let res = await  axios.get("https://fakestoreapi.com/users")

      console.log(res);
      setUserData(res.data);
      
    } catch (error) {

      console.log(error)
      
    }
  }

useEffect(()=>{

  getUserData();

},[])
  return (
    <div>
 
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">

      {/* Header */}
      <div className="bg-blue-600 p-6 text-center">

        Avatar
        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center">
          {/* <span className="text-2xl font-bold text-blue-600 uppercase">dss
             {userData.name.firstname[0]}ds
            {userData.name.lastname[0]} 
          </span> */}
        </div>

        {/* <h2 className="text-xl font-bold text-white mt-3 capitalize">
          {userData.name.firstname} {userData.name.lastname}
        </h2> */}

        <p className="text-blue-100 text-sm">
          @{userData.username}
        </p>
      </div>

      {/* User Details */}
      <div className="p-6 space-y-4">

        {/* Email */}
        <div>
          <p className="text-xs text-gray-400 uppercase font-semibold">
            Email
          </p>

          <p className="text-gray-700 font-medium break-all">
            {userData.email}
          </p>
        </div>

        {/* Phone */}
        <div>
          <p className="text-xs text-gray-400 uppercase font-semibold">
            Phone
          </p>

          <p className="text-gray-700 font-medium">
            {userData.phone}
          </p>
        </div>

        {/* Address */}
        <div>
          <p className="text-xs text-gray-400 uppercase font-semibold">
            Address
          </p>
{/* 
          <p className="text-gray-700 font-medium capitalize">
            {userData.address.number}, {userData.address.street},{" "}
            {userData.address.city}
          </p> */}

          {/* <p className="text-gray-500 text-sm mt-1">
            ZIP: {userData.address.zipcode}
          </p> */}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">

          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
            View
          </button>

          <button className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg font-medium transition">
            Edit
          </button>

        </div>

      </div>
    </div>

    </div>
  )
}

export default UserPage
