import React from "react";
import { acData } from "../../data/ac";
import { Link } from "react-router-dom";

const Ac = () => {
  const firstFiveImages = acData.slice(0, 4);
  return (
    <div>
      <Link to='/ac'><h2 className="text-center font-medium  hover:text-customColor text-2xl  text-white p-5 bg-black">
          Ac's
        </h2></Link>
      
    <div className="flex flex-wrap justify-center p-0 m-0 bg-black"> 
    
      {firstFiveImages.map((item) => {
        return (
          <div key={item.id} className="p-1 m-1  ">
            <Link to='/ac'> <img
              src={item.image}
              alt={item.name}
              className="h-auto w-48 sm:w-64"
              style={{ maxWidth: "100%" }}
            /></Link>
           <p>{item.product}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Ac;
