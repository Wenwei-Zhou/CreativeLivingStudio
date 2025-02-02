import React from "react";
import { Navbar } from "Navbar/Navbar";
import { ImageSlider } from "ImageSlider/ImageSlider";
import { Category } from "Category/Category"
import './Home.css'


export const Home = () => {

   

    return(
        <div className="home">
            <div className="home-navbar">
            <Navbar/>
            </div>

            <div className="home-imageSlider">
            <ImageSlider/>
            </div>

            <div className="home-category">
            <Category/>
            </div>

            <div className="home-category">
            <Category/>
            </div>
            
        </div>
    )
}