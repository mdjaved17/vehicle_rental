import React from "react";
import login from "../assets/keyRide.svg";

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative h-3/4 w-[450px] rounded-lg overflow-hidden">
        {/* Image section */}
        <img src={login} alt="" className="w-full h-full object-cover" />

        {/* Input Fields overlay on image */}

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-0 flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold text-zinc-100">
            Hii, Create Your Account
          </h2>
          <div className="flex flex-col w-72 gap-1">
            <label className="text-white font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your FullName"
              className="border-2 border-gray-300  px-3 py-2 rounded-md w-full focus:outline-none focus:border-black"
            />
          </div>

          <div className="flex flex-col w-72 gap-1">
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-black"
            />
          </div>

          <div className="flex flex-col w-72 gap-1">
            <label className="text-white font-medium">Password</label>
            <input
              type="password"
              placeholder="Create your password"
              className="border-2 border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-black"
            />
          </div>
          <div className="pt-5">
            <button className="px-3 py-2 w-72 bg-orange-500 text-white text-sm rounded-full font-semibold hover:bg-yellow-700 transition cursor-pointer">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
