// Home.js
import React from "react";
import SliderAuto from "../components/ImageCarousel";
import CategoryCarousel from "../components/CategoryCarousel";
import Box from "../components/Box";
import Footer from "../components/Footer";


import s1 from "../assets/sliders/slide1.png";
import s2 from "../assets/sliders/slide2.png";
import s3 from "../assets/sliders/slide3.png";
import s4 from "../assets/sliders/slide4.png";
import s5 from "../assets/sliders/slide5.png";
import s6 from "../assets/sliders/slide6.png";
import s7 from "../assets/sliders/slide7.png";
import s8 from "../assets/sliders/slide8.png";

import c1 from "../assets/categoryImg/Accessories.png";
import c2 from "../assets/categoryImg/Air_Conditioners.png";
import c3 from "../assets/categoryImg/Camera.png";
import c4 from "../assets/categoryImg/Cooler.png";
import c5 from "../assets/categoryImg/Fan.png";
import c6 from "../assets/categoryImg/Grooming.png";
import c7 from "../assets/categoryImg/Headphones_Earphones.png";
import c8 from "../assets/categoryImg/Kitchen_Appliances.png";
import c9 from "../assets/categoryImg/Laptops.png";
import c10 from "../assets/categoryImg/Microwave.png";
import c11 from "../assets/categoryImg/Mobiles.png";
import c12 from "../assets/categoryImg/Refrigerators.png";
import c13 from "../assets/categoryImg/Speakers_Media_Players.png";
import c14 from "../assets/categoryImg/Tablets.png";
import c15 from "../assets/categoryImg/Televisions.png";
import c16 from "../assets/categoryImg/Washing_Machines.png";

import bank1 from "../assets/bank-offers/bank1.png";
import bank2 from "../assets/bank-offers/bank2.png";
import bank3 from "../assets/bank-offers/bank3.png";
import bank4 from "../assets/bank-offers/bank4.png";

import fav from "../assets/bank-offers/favourite.png";

import offer1 from "../assets/hot-offers/ipadair.png";
import offer2 from "../assets/hot-offers/Ipadpro.png";
import offer3 from "../assets/hot-offers/Pencilpro.png";
import offer4 from "../assets/hot-offers/Keyboard.png";
import care from "../assets/hot-offers/care.png";

import slider1 from "../assets/sliders-II/s1.png";
import slider2 from "../assets/sliders-II/s2.png";
import slider3 from "../assets/sliders-II/s3.png";
import slider4 from "../assets/sliders-II/s4.png";

import deal1 from "../assets/deals/deal1.png";
import deal2 from "../assets/deals/deal1.png";
import deal3 from "../assets/deals/deal1.png";
import deal4 from "../assets/deals/deal1.png";
import nue from "../assets/deals/nue.png";

import gift1 from "../assets/giftcards/1Gift.png";
import gift2 from "../assets/giftcards/gift2.png";
import why from "../assets/giftcards/whycroma.png";
const Home = () => {
  return (
    <div style={{ background: "black" }}>
      <Box>
        <SliderAuto>
          <div className="flex">
            <img src={s1} alt="sliderImage" />
            <img src={s2} alt="sliderImage" />
            <img src={s3} alt="sliderImage" />
            <img src={s4} alt="sliderImage" />
            <img src={s5} alt="sliderImage" />
            <img src={s6} alt="sliderImage" />
            <img src={s7} alt="sliderImage" />
            <img src={s8} alt="sliderImage" />
          </div>
        </SliderAuto>
        <CategoryCarousel width={125}>
          <div className="flex gap-3 md:gap-6 p-5">
            <img
              src={c1}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c2}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c3}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c4}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c5}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c6}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c7}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c8}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
          </div>
          <div className="flex gap-3 md:gap-6">
            <img
              src={c9}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c10}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c11}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c12}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c13}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c14}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c15}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
            <img
              src={c16}
              alt="categoryImage"
              className="w-14 md:min-w-[125px]"
            />
          </div>
        </CategoryCarousel>

        <div className="flex  gap-4 md:gap-10 mt-10 mb-5 p-5">
          <img
            src={bank3}
            alt="bank offer"
            className=" rounded-md w-full md:w-1/2 md:min-w-[100px] overflow-hidden block md:inline-block"
          />
          <img
            src={bank4}
            alt="bank offer"
            className=" rounded-md w-full md:w-1/2 md:min-w-[100px] overflow-hidden block md:inline-block"
          />
        </div>

        <h2 className="font-medium text-2xl my-5 text-white p-10">
          Exciting Bank Offers
        </h2>

        <div className="flex gap-10  ">
          <img
            src={bank1}
            alt="bank offer"
            className=" rounded-md w-full md:w-1/2 md:min-w-[100px] overflow-hidden block md:inline-block"
          />
          <img
            src={bank2}
            alt="bank offer"
            className=" rounded-md w-full md:w-1/2 md:min-w-[100px] overflow-hidden block md:inline-block"
          />
        </div>

        <h2 className="font-medium text-2xl my-5 text-white p-10">
          Our New Favourite
        </h2>
        <div>
          <img src={fav} alt="fav image" className="w-full md:w-100 mx-auto" />
        </div>

        <h2 className="font-medium text-2xl my-5 text-white p-5">What's Hot</h2>
        <div className="flex flex-wrap gap-3 md:gap-10 justify-center items-center">
          <img
            src={offer1}
            alt="offer image"
            className="w-40 h-40 md:w-60 md:h-60 rounded-lg"
          />
          <img
            src={offer2}
            alt="offer image"
            className="w-40 h-40 md:w-60 md:h-60 rounded-lg"
          />
          <img
            src={offer3}
            alt="offer image"
            className="w-40 h-40 md:w-60 md:h-60 rounded-lg"
          />
          <img
            src={offer4}
            alt="offer image"
            className="w-40 h-40 md:w-60 md:h-60 rounded-lg"
          />
        </div>

        <h2 className="font-medium text-2xl my-5 text-white p-5">
          No More Worrying About Your Appliances
        </h2>
        <div>
          <img src={care} alt="fav image" className="w-full md:w-100 mx-auto" />
        </div>

        <SliderAuto>
          <div className="flex p-10 ">
            <img src={slider1} alt="sliderImage" />
            <img src={slider2} alt="sliderImage" />
            <img src={slider3} alt="sliderImage" />
            <img src={slider4} alt="sliderImage" />
          </div>
        </SliderAuto>

        <h2 className="font-medium text-2xl my-5 text-white p-5">
          Deals Of The Day
        </h2>
        <div className="flex flex-wrap gap-3 md:gap-10 justify-center items-center">
          <img
            src={deal1}
            alt="deal1 image"
            className="w-40 h-40 md:w-60 md:h-60 rounded-lg"
          />
          <img
            src={deal2}
            alt="deal1 image"
            className="w-40 h-40 md:w-60 md:h-60 rounded-lg"
          />
          <img
            src={deal3}
            alt="deal1 image"
            className="w-40 h-40 md:w-60 md:h-60 rounded-lg"
          />
          <img
            src={deal4}
            alt="deal1 image"
            className="w-40 h-40 md:w-60 md:h-60 rounded-lg"
          />
        </div>

        <h2 className="font-medium text-2xl my-5 text-white p-5">
          Experience Croma On Tata Neu!
        </h2>
        <div>
          <img src={nue} alt="fav image" className="w-full md:w-100 mx-auto" />
        </div>

        <div className="flex  gap-4 md:gap-10 mt-10 mb-5 p-5">
          <img
            src={gift1}
            alt="bank offer"
            className=" rounded-md w-full md:w-1/2 md:min-w-[100px] overflow-hidden block md:inline-block"
          />
          <img
            src={gift2}
            alt="bank offer"
            className=" rounded-md w-full md:w-1/2 md:min-w-[100px] overflow-hidden block md:inline-block"
          />
        </div>

        <h2 className="font-medium text-2xl my-5 text-white p-5">Why Croma?</h2>
        <div>
          <img src={why} alt="fav image" className="w-full md:w-100 mx-auto" />
        </div>

         <Footer/>
      </Box>
    </div>
  );
};

export default Home;
