import React, { useState } from "react";
import car from "../assets/car.svg";
import { CiSearch } from "react-icons/ci";
import { assets, cityList } from "../assets/asset/assets";

function Centre() {
  const [pickupLocation, setpickupLocation] = useState("");

  return (
    <div >
      {/* <h1 className="text-4xl md:text-4xl font-semibold">
        Cars and Bikes on Rent
      </h1> */}
      <img
        src={car}
        alt=""
        className="w-full h-[400px] object-cover object-center"
      />
      <div className="pt-12 flex flex-col items-center justify-center gap-14 text-center">
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-4 rounded-lg md:rounded-full w-full max-w-[80rem] md:max-w-[800px]  bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 ml-8">
          <div className="flex flex-col items-start gap-2">
            <select
              required
              value={pickupLocation}
              onChange={(e) => {
                setpickupLocation(e.target.value);
              }}
              className="rounded-full focus:outline-none"
            >
              <option
                className="border border-gray-300 rounded-md"
                value="Pickup Location"
              >
                Pickup Location
              </option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {" "}
              {pickupLocation ? pickupLocation : "Please select Location"}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Pickup-Date</label>
            <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className="text-sm text-gray-500" required/>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Return-Date</label>
            <input type="date" id="return-date" className="text-sm text-gray-500" required/>
          </div>
          
        </div>
        <div className="flex pl-4 flex-col gap-2 items-end">
            <button className="flex items-center gap-2 px-8 py-3 bg-blue-500 text-white active:scale-95 cursor-pointer rounded-full">
              Search <CiSearch />
            </button>
          </div>
      </form>
      </div>
    </div>
  );
}

export default Centre;
