import React from "react";
import { mobileData } from "../../data/mobile";
import { Link } from "react-router-dom";

const Mobiles = () => {
  const firstFiveImages = mobileData.slice(0, 4);
  return (
    <div>
      <Link to='/mobile'  ><h2 className="text-center font-medium   text-2xl  text-white p-5 bg-black  hover:text-customColor">
          Mobiles
        </h2></Link>
      
    <div className="flex flex-wrap justify-center p-0 m-0 bg-black"> 
    
      {firstFiveImages.map((item) => {
        return (
          <div key={item.id} className="p-1 m-1  ">
             <Link to='/mobile'  >
            <img
              src={item.image}
              alt={item.name}
              className="h-auto w-48 sm:w-64"
              style={{ maxWidth: "100%" }}
            />
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Mobiles;
