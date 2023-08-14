import React from "react";

const Discount = () => {
  return (
    <div className="flex items-center justify-around py-5 text-black">
      <div className="w-1/3 relative">
        <img src="media/burger1.jpeg" alt="Burger" className="w-full rounded-lg" />
        <h1 className="absolute -mt-44 text-white font-bold text-xl p-4">25% <br /> Discount</h1>
      </div>

      <div>
      <div className="flex flex-col items-center">
        <img src="media/waffles.png" alt="Waffles" className="  h-[25vh] mt-[-2%] relative z-10 bg-orange-700 rounded-lg mr-40" />
      </div>
      <div className="flex flex-col items-center">
        <img src="media/torti.png" alt="Torti" className=" w-[20vw] h-[25vh] mt-10 bg-orange-400 rounded-lg mr-40" />
        <div className="absolute mt-44 ml-[5%] bg-yellow-500 overflow-hidden">
          <p className="text-white text-lg font-semibold p-6">15% Off</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Discount;