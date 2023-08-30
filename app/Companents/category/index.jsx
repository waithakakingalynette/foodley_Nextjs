import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <div className=" bg-white">
    <div className="header ml-20 font-ubuntu mb-20 ">
  <p className="text-3xl font-bold" style={{ fontSize:"50px",
              marginLeft: "100px"}}>
     <h1 className="text-pink-500"> Best Delivered <br />  <br /> Categories</h1> 
  </p>
  <br />
  <p className="text-gray-600"  style={{ fontSize:"20px",
              marginLeft: "1000px", marginTop:"-8%"}}>
    Here are Some Of Our Best Distributed  <br />Categories. If You Want You Can Order <br />  From Here
  </p>
</div>


      <div className="flex justify-center space-x-10">
      {/* <img src="/media/foods.png" alt="Fries" /> */}
        <div className="flex flex-col items-center">
          <div className="">
            <div className="burger" style={{marginRight:"300px"}}>
              <img src="/media/burger.jpeg" alt="Burger" />
            </div>
          </div>
          <div className="mt-20">
            <h6 className="text-xl font-semibold"style={{color:"black"}} >Chicken Burger</h6>
            <button  className="order p-1 outline-none border-nne text-pink-500 text-base w-full flex items-center" style={{marginRight:"400px"}} >
              Order Now <FontAwesomeIcon className="text-pink-500 w-5 h-5 mb-2 icons"icon={faGreaterThan} />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <div className="pizza" style={{marginRight:"150px"}}>
              <img src="/media/pizza.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="mt-20">
            <h6 className="text-xl font-semibold" style={{color:"black"}}>Chicken Pizza</h6>
            <button  className="order p-1 outline-none border-none text-pink-500 text-base w-full flex items-center" style={{marginRight:"200px"}}>
              Order Now <FontAwesomeIcon className="text-pink-500 w-5 h-5 mb-2 icons" icon={faGreaterThan} />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <div className="fries" style={{marginLeft:"200px"}}>
              <img src="/media/frenchfries.jpeg" alt="Fries" />
            </div>
          </div>
          <div className="mt-20">
            <h6 className="text-xl font-semibold" style={{color:"black",marginLeft:"200px", marginTop:"-5%"}}>French Fries</h6>
            <button  className="order p-1 outline-none border-none text-pink-500 text-base w-full flex items-center" style={{marginLeft:"200px"}}>
              Order Now <FontAwesomeIcon className="text-pink-500 w-5 h-5 mb-2 icons" icon={faGreaterThan} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Categories;