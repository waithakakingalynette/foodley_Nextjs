import React from "react";
import MenuItem from "@/app/menuItem/page";

const Menu = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="header ml-20 font-ubuntu mb-20">
          <h1 className="text-3xl font-semibold">
            Our <span className="text-pink-500">Regular</span> Menu
          </h1>
        </div>
        <div className="flex px-4 flex px-4 justify-between space-x-32">
          <p className=" mb-4">
            These Are Our Regular Menus. You Can Order Anything You Like.
          </p>
          <button className=" flex bg-pink-500 text-white py-2 px-4 rounded-full">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <MenuItem
            imageUrl="/media/chicken-burger.jpeg"
            name="Chicken Burger"
            ratings={4.5}
            price={7.99}
          />
          <MenuItem
            imageUrl="/media/chicken-pizza.jpeg"
            name="Margherita Pizza"
            ratings={4.8}
            price={12.99}
          />
          <MenuItem
            imageUrl="/media/drumsticks.jpeg"
            name="Margherita Pizza"
            ratings={4.8}
            price={12.99}
          />
          <MenuItem
            imageUrl="/media/grilled-sandwich.jpeg"
            name="Margherita Pizza"
            ratings={4.8}
            price={12.99}
          />
          <MenuItem
            imageUrl="/media/tacos.jpeg"
            name="Margherita Pizza"
            ratings={4.8}
            price={12.99}
          />
          <MenuItem
            imageUrl="/media/ramen.jpeg"
            name="Margherita Pizza"
            ratings={4.8}
            price={12.99}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
