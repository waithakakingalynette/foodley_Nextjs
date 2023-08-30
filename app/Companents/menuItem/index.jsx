import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({ imageUrl, name, ratings, price }) => {
  const renderStars = () => {
    const fullStars = Math.floor(ratings);
    const hasHalfStar = ratings % 1 >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} className="text-yellow-500 text-xs" icon={faStar} />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" className="text-yellow-500 text-xs" icon={faStarHalfAlt} />);
    }

    return stars;
  };

  return (
    <div className="bg-white shadow-md rounded-md menu-item w-1/2">
      <div className="relative">
        <div>
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-44 h-44 border-pink-500 border-10 rounded-full ml-32 mt-1 circle-background" style={{border: "10px solid rgb(233, 82, 107)", borderradius: "50%"}}
          />
        </div>
      </div>
      <div className="p-4">
        <h6 className="font-semibold text-lg" style={{color:"black"}}>{name}</h6>
        <div className="flex space-x-1 w-24 h-24">{renderStars()}</div>
        <div className="flex items-center mt-2">
          <p className="text-lg font-semibold" style={{color:"black"}}>${price}</p>
          <button className="ml-auto bg-pink-500 px-4 py-2 rounded-full text-white buy-now">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default MenuItem;

