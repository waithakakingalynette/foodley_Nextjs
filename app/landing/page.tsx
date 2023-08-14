import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faPlayCircle, faTruck, faLeaf, faShippingFast } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="flex justify-around items-center home-container text-pink-500 font-bold" style={{ fontFamily: "'Ubuntu', sans-serif", marginTop: "3%", color: "#E30B5C", padding: "20px" }}>
          <div>
            <h4 className="text-4xl mb-4">All Fast Food is <br /> Available at Foodish</h4>
            <div className="thumbnail flex items-center gap-4 text-gray-600">
              <img src="/media/nyeliep.jpg" alt="Delicious Food" className="w-12 h-12 rounded-full object-cover" />
              <p className="mt-2">We Are Just A Click Away When You <br /> Crave For Delicious Fast Food</p>
            </div>

            <div className="flex space-x-4 mt-4 buttons">
              <button className="buy-btn flex items-center bg-pink-500 px-4 py-2 rounded-full">
                <FontAwesomeIcon className="text-yellow-500 w-4 h-4" icon={faBagShopping} />
                Buy Now
              </button>
              <button className="play-btn flex items-center bg-white px-4 py-2 rounded-full">
                <FontAwesomeIcon className="text-yellow w-4 h-4 it" icon={faPlayCircle} />
                How To Order
              </button>
            </div>
          </div>
          <div className="home-img">
            <img src="/media/sandwich-clipart.png" alt="Sandwich" />
          </div>
        </div>
      </div>
      <div style={{ display:"flex",fontFamily: "'Ubuntu', sans-serif", marginTop: "10%", margin: "0 15%", padding: "20px", justifyContent: "space-around", alignItems: "center", backgroundColor: "#FFFFF0", borderRadius: "30px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)" }}>
  <div className="text-center">
    <FontAwesomeIcon className="text-yellow-500 w-12 h-12 mb-2 ml-40 icons"icon={faShippingFast} />
    <h5 className="text-lg font-semibold">Fast Delivery</h5>
    <p className="text-gray-600">The food will be Delivered To Your Home Within 1-2 Hours Of Your Ordering</p>
  </div>
  <div className="text-center">
      <FontAwesomeIcon className="text-yellow-500 w-12 h-12 mb-2 ml-48 icons" icon={faLeaf} />
      <h5 className="text-lg font-semibold">Fresh Food</h5>
      <p className="text-gray-600">
        Your Food Will Be delivered 100% Fresh To Your Home. We Do Not Deliver Stale Food
      </p>
    </div>
  <div className="text-center">
    <FontAwesomeIcon className="text-yellow-500 w-12 h-12 mb-2 ml-44 icons"icon={faTruck} />
    <h5 className="text-lg font-semibold">Free Delivery</h5>
    <p className="text-gray-600 ">Your Food Delivery Is Absolutely Free. No Cost, Just Order And Enjoy</p>
  </div>
</div>


    </div>
  );
};

export default Landing;