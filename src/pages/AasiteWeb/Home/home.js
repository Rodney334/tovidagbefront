// Home.js
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Images
import defaultDemo from "../../../assets/images/demos/default.png";
import saasDemo from "../../../assets/images/demos/saas.png";
import materialDemo from "../../../assets/images/demos/material.png";
import minimalDemo from "../../../assets/images/demos/minimal.png";
import creativeDemo from "../../../assets/images/demos/creative.png";
import modernDemo from "../../../assets/images/demos/modern.png";
import interactiveDemo from "../../../assets/images/demos/interactive.png";

const Home = () => {
    return (
        <Swiper
            spaceBetween={10}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mx-3"
            height= "650px"
        >
            <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                <img src={defaultDemo} className="d-block w-100" alt="Default Demo" />
            </SwiperSlide>
            <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                <img src={saasDemo} className="d-block w-100" alt="SaaS Demo" />
            </SwiperSlide>
            <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                <img src={materialDemo} className="d-block w-100" alt="Material Demo" />
            </SwiperSlide>
            <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                <img src={minimalDemo} className="d-block w-100" alt="Minimal Demo" />
            </SwiperSlide>
            <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                <img src={creativeDemo} className="d-block w-100" alt="Creative Demo" />
            </SwiperSlide>
            <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                <img src={modernDemo} className="d-block w-100" alt="Modern Demo" />
            </SwiperSlide>
            <SwiperSlide className="carousel-inner shadow-lg p-2 bg-white rounded">
                <img src={interactiveDemo} className="d-block w-100" alt="Interactive Demo" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Home;
