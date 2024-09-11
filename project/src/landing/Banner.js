import React, {useEffect, useRef, useState} from 'react';
import b1 from './redmi-note-13-13-pro-5g_1725324203.jpg';
import b2 from './redmi-k50-2_1725324300.jpg';
import b3 from './redmi-note-12-turbo_1724635374.jpg';
const Banner = () => {
  const dataNews = [b1, b2, b3];
  let currentIndex = 0;

  function showSlide(index) {
    const slider = document.getElementById('slider');
    const totalSlides = slider.children.length;
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto-slide functionality
  setInterval(nextSlide, 25000); // Change slide every 5 seconds

  return (
      <div className="relative max-w-6xl mx-auto pt-15">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-5000" id="slider">
            <div className="w-full flex-shrink-0">
              <img src={b1} className="w-full object-fit-cover" alt="Banner 1"/>
            </div>
            <div className="w-full flex-shrink-0">
              <img src={b2} className="w-full object-fit-cover" alt="Banner 2"/>
            </div>
            <div className="w-full flex-shrink-0">
              <img src={b3} className="w-full object-cover" alt="Banner 3"/>
            </div>
          </div>
        </div>
        <button className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                onClick={prevSlide}>&#10094;</button>
        <button className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                onClick={nextSlide}>&#10095;</button>
      </div>
  )
};

export default Banner;