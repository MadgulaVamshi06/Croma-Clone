import React from "react";
import { tvData } from "../../data/tv";
import { Link } from "react-router-dom";
const Tv = () => {
  const firstFiveImages = tvData.slice(0, 4);
  return (
    <div>
      <Link to='/tv'><h2 className="text-center font-medium  hover:text-customColor  text-2xl  text-white p-5 bg-black">
          TV
        </h2></Link>
      
    <div className="flex flex-wrap justify-center p-0 m-0 bg-black"> 
    
      {firstFiveImages.map((item) => {
        return (
          <div key={item.id} className="p-1 m-1  ">
            <Link to='/tv'><img
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

export default Tv
;
