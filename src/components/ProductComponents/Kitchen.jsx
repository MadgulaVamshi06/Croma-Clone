import React from "react";
import { kitchenData } from "../../data/kitchen";
import { Link } from "react-router-dom";

const kitchen = () => {
  const firstFiveImages = kitchenData.slice(0, 4);
  return (
    <div>
      <Link to='/kitchen'><h2 className="text-center font-medium   text-2xl hover:text-customColor text-white p-5 bg-black">
          Kitchen
        </h2></Link>
      
    <div className="flex flex-wrap justify-center p-0 m-0 bg-black"> 
    
      {firstFiveImages.map((item) => {
        return (
          <div key={item.id} className="p-1 m-1  ">
            <Link to='/kitchen'> <img
              src={item.image}
              alt={item.name}
              className="h-auto w-48 sm:w-64"
              style={{ maxWidth: "100%" }}
            /></Link>
           
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default kitchen;
