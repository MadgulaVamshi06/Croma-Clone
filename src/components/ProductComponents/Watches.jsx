import React from "react";
import { watchData } from "../../data/watches";
import { Link } from "react-router-dom";
const watches = () => {
  const firstFiveImages = watchData.slice(0, 4);
  return (
    <div>
      <Link to="/watches">
        <h2 className="text-center font-medium hover:text-customColor  text-2xl  text-white p-5 bg-black">
          Watches
        </h2>
      </Link>

      <div className="flex flex-wrap justify-center p-0 m-0 bg-black">
        {firstFiveImages.map((item) => {
          return (
            <div key={item.id} className="p-1 m-1  ">
              <Link to="/watches">
                {" "}
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

export default watches;
