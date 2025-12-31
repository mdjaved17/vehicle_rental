import React from "react";
import login from "../assets/keyRide.svg";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative h-3/4 w-[450px] rounded-lg overflow-hidden">
        
        {/* Image section */}
        <img src={login} alt="" className="w-full h-full object-cover" />

        {/* Input Fields overlay on image */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-0 flex flex-col gap-6 items-center">
          <input
            type="text"
            placeholder="username"
            className="border-2 border-black-400 px-3 py-2 rounded-md w-72"
          />
          <input
            type="password"
            placeholder="password"
            className="border-2 border-gray-400 px-3 py-2 rounded-md w-72"
          />
          <button className="px-3 py-2 w-72 bg-yellow-500 text-white text-sm rounded-full font-semibold hover:bg-orange-700 transition cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
