import React, { useState, useEffect } from "react";
import "./body.css";

function Body() {
  return (
    <>
      <div id='carouselExampleFade' class='carousel slide carousel-fade'>
        <div class='carousel-inner'>
          <div class='carousel-item active img-movie'>
            <img
              src='http://hotflix.volkovdesign.com/main/img/home/home__bg.jpg'
              class='d-block w-100'
              alt='...'
            />
          </div>
          <div class='carousel-item img-movie'>
            <img
              src='http://hotflix.volkovdesign.com/main/img/home/home__bg2.jpg'
              class='d-block w-100'
              alt='...'
            />
          </div>
          <div class='carousel-item img-movie'>
            <img
              src='http://hotflix.volkovdesign.com/main/img/home/home__bg3.jpg'
              class='d-block w-100'
              alt='...'
            />
          </div>
          <div className='carousel-item img-movie'>
            <img
              src='http://hotflix.volkovdesign.com/main/img/home/home__bg4.jpg'
              class='d-block w-100'
              alt=''
            />
          </div>
          <div className='carousel-item img-movie'>
            <img
              src='http://hotflix.volkovdesign.com/main/img/home/home__bg5.jpg'
              class='d-block w-100'
              alt=''
            />
          </div>
        </div>
      </div>
      <button
        class='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='prev'
      >
        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Previous</span>
      </button>
      <button
        class='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='next'
      >
        <span class='carousel-control-next-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Next</span>
      </button>
    </>
  );
}

export default Body;
