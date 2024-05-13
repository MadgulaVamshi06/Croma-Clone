import React from "react";
import { speakerData } from "../../data/speakers";
import { Link } from "react-router-dom";

const Speakers = () => {
  const firstFiveImages = speakerData.slice(0, 4);
  return (
    <div>
      <Link to='/speaker'><h2 className="text-center font-medium   text-2xl   hover:text-customColor text-white p-5 bg-black">
        Speakers
      </h2></Link>
      
      <div className="flex flex-wrap justify-center p-0 m-0 bg-black">
        {firstFiveImages.map((item) => {
          return (
            <div key={item.id} className="p-1 m-1  ">
              <Link to='/speaker'><img
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

export default Speakers;
