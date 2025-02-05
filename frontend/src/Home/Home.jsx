import React from "react";
import { Navbar } from "Navbar/Navbar";
import { ImageSlider } from "Slider/ImageSlider";
import { Category } from "Category/Category";
import { SwiperSlider } from "Slider/SwiperSlider";
import { Footer } from "Footer/Footer"
import './Home.css'
import { motion } from "framer-motion";


export const Home = () => {

   

    return(
        <div className="home">
            <div className="home-navbar">
            <Navbar/>
            </div>

            {/* <div className="home-imageSlider"> */}
            <motion.div
                className="home-imageSlider"
                initial={{ x: 100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1 }}
            >
            <ImageSlider/>
            </motion.div>
            {/* </div> */}

            {/* <div className="home-category"> */}
            <motion.div
                className="home-category"
                initial={{ x: 100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.5 }}
            >
            <Category/>
            </motion.div>
            {/* </div> */}

            <div className="home-swiperslider">
                <SwiperSlider/>
            </div>

            <div className="home-footer">
                <Footer/>
            </div>

        </div>
    )
}