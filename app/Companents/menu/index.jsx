import React from "react";
import MenuItem from "../menuItem";

const Menu = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="header ml-20 font-ubuntu mb-20">
          <h1 className="text-3xl font-semibold">
           <span className="text-pink-500">  Our Regular Menu</span> 
          </h1>
        </div>
        <div className="flex px-4 flex px-4 justify-between space-x-32">
          <p className=" mb-4" style={{color:"grey",fontSize:"20px",marginTop:"-3%",marginLeft:"60px"}}>
            These Are Our Regular Menus. You Can <br /> Order Anything You Like.
          </p>
          <button className=" flex bg-pink-500 text-white py-2 px-4 rounded-full">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4" >
          <MenuItem  
            imageUrl="/media/chicken-burger.jpeg" 
            name="Chicken Burger"
            ratings={4.5}
            price={7.99}
          />
          <MenuItem
            imageUrl="/media/chicken-pizza.jpeg"
            name="Chicken Pizza"
            ratings={4.8}
            price={12.99}
          />
          <MenuItem
            imageUrl="/media/drumsticks.jpeg"
            name="Chicken Fry"
            ratings={4.8}
            price={12.99}
          />
          <MenuItem
            imageUrl="/media/grilled-sandwich.jpeg"
            name="Grill Sandwich"
            ratings={4.8}
            price={12.99}
          />
          <MenuItem
            imageUrl="/media/tacos.jpeg"
            name="Taco Traifi"
            ratings={4.8}
            price={12.99}
          />
          <MenuItem
            imageUrl="/media/ramen.jpeg"
            name="Noddle's Ramen"
            ratings={4.8}
            price={12.99}
          />
        </div>
      </div>
      <img src="/media/buy.png"style={{ marginLeft:"300px",marginTop:"2%" }}/>

    </div>
  );
};

export default Menu;
