import React from "react";
import { tvData } from "../../data/tv";
import { useParams } from "react-router-dom";
import ProductNavbar from "../../components/ProductNavbar";

const TvSinglePage = () => {
  const { id } = useParams();
  const product = tvData.find((item) => item.id === id);
   console.log(product)
  return (
    <div>
    <ProductNavbar/>
    <div className="bg-black ">
      {/* Product info */}
      <div className="flex flex-col lg:flex-row mx-auto  max-w-2xl px-4 pb-16 pt-10 sm:px-6">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.model}
            className="w-full h-auto object-cover object-center rounded-lg"
          />
        </div>

        {/* Product details */}
        <div className="w-full lg:w-1/2 px-4">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
            {product.product}
          </h1>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
            {product.model}
          </h1>

          

          <p className="text-base text-white mt-6">{product.description}</p>
          <br />
          <p className="text-3xl tracking-tight text-white">₹{product.price}</p>
          {/* Add to cart */}
          <div className="mt-10">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TvSinglePage;
