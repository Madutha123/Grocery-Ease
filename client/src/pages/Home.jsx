import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import image1 from '../assets/home-image-1.png';
import image2 from '../assets/home-image-2.jpg';

export default function Home() {
  
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto relative'>
        <h1 className='text-gray-200 font-bold text-3xl lg:text-6xl'>
          Make your <span className='text-white'>Grocery</span><span className='text-yellow-300'>List</span>
          <br />
          with ease
        </h1>
        <div className='text-gray-300 text-xs sm:text-sm'>
          Grocery Ease is the best place to easily manage your home grocery list in one place.
          
          <br />
          
          Save time, reduce waste, and never forget an item again!
        </div>
        <div className="flex max-w-7xl mx-auto justify-between mt-14 mb-14 gap-5">
      <img src={image1} alt="" className="object-cover w-full h-full" />
      </div>
      </div>
      
    </div>
  );
}
