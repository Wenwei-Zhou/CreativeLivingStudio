import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import studio1 from "../images/studio1.jpg"
import studio2 from "../images/studio2.jpg"
import studio3 from "../images/studio3.jpg"
import studio4 from "../images/studio4.jpg"
import studio5 from "../images/studio5.jpg"
import studio6 from "../images/studio6.jpg"
import "./SwiperSlider.css"

export const SwiperSlider = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        //slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return(
        <div className="container">

        <div className='header-slider'>
        <h1 className="heading">Creative Studio</h1>

        <div className="slider-container">
        <Slider {...settings}>
            <div>
            <img src={studio1} alt="slide_image"/>
            </div>
            <div>
            <img src={studio2} alt="slide_image"/>
            </div>
            <div>
            <img src={studio3} alt="slide_image"/>
            </div>
            <div>
            <img src={studio4} alt="slide_image"/>
            </div>
            <div>
            <img src={studio5} alt="slide_image"/>
            </div>
            <div>
            <img src={studio6} alt="slide_image"/>
            </div>
        </Slider>
        </div>
        </div>
      {/* <Swiper className="swiper_container"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        >

        <SwiperSlide>
          <img src={studio1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio6} alt="slide_image" />
        </SwiperSlide>
        

       
      </Swiper> */}
    </div>
    )
}