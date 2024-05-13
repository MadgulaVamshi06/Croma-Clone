import React from "react";
import { fridgeData } from "../../data/fridges";
import { Link } from "react-router-dom";

const Fridges = () => {
  const firstFiveImages = fridgeData.slice(0, 4);
  return (
    <div>
      <Link to='/fridge'><h2 className="text-center font-medium   text-2xl hover:text-customColor text-white p-5 bg-black">
          Fridges
        </h2></Link>
      
    <div className="flex flex-wrap justify-center p-0 m-0 bg-black"> 
    
      {firstFiveImages.map((item) => {
        return (
          <div key={item.id} className="p-1 m-1  ">
            <Link to='/fridge'><img
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

export default Fridges;
