import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <div className=" bg-white">
    <div className="header ml-20 font-ubuntu mb-20 ">
  <h1 className="text-3xl font-semibold">
    Best <span className="text-pink-500">Delivered</span> Categories
  </h1>
  <p className="text-gray-600">
    Here are Some Of Our Best Distributed Categories. If You Want You Can Order From Here
  </p>
</div>


      <div className="flex justify-center space-x-10">
        <div className="flex flex-col items-center">
          <div className="">
            <div className="burger">
              <img src="/media/burger-clip.png" alt="Burger" />
            </div>
          </div>
          <div className="mt-20">
            <h6 className="text-xl font-semibold">Chicken Burger</h6>
            <button  className="order p-1 outline-none border-none text-pink-500 text-base w-full flex items-center">
              Order Now <FontAwesomeIcon className="text-pink-500 w-5 h-5 mb-2 icons"icon={faGreaterThan} />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <div className="pizza">
              <img src="/media/mushroom-pizza.png" alt="Pizza" />
            </div>
          </div>
          <div className="mt-20">
            <h6 className="text-xl font-semibold">Chicken Pizza</h6>
            <button  className="order p-1 outline-none border-none text-pink-500 text-base w-full flex items-center">
              Order Now <FontAwesomeIcon className="text-pink-500 w-5 h-5 mb-2 icons" icon={faGreaterThan} />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <div className="fries">
              <img src="/media/fries-clipart.png" alt="Fries" />
            </div>
          </div>
          <div className="mt-20">
            <h6 className="text-xl font-semibold">French Fries</h6>
            <button  className="order p-1 outline-none border-none text-pink-500 text-base w-full flex items-center">
              Order Now <FontAwesomeIcon className="text-pink-500 w-5 h-5 mb-2 icons" icon={faGreaterThan} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;