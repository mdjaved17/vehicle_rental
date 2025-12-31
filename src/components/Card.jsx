import React from "react";

function Card({ data }) {
  return (
    <div className="flex flex-wrap gap-6 p-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="h-86 w-68 flex flex-col group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-white"
        >
          {/* Image section */}
          <div className="relative h-52 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.image}
              alt={item.name}
            />

            {item.isAvailable && (
              <p className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                Available Now
              </p>
            )}
          </div>

          {/* Content section */}
          <div className="flex flex-col justify-between p-4 flex-1">
            <h3 className="text-lg font-bold text-gray-800">
              {item.name}
            </h3>

            <span className="text-sm font-semibold text-gray-600 mt-1">
              {item.Rate}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
