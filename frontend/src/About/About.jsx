import React from "react";
import { Navbar } from "Navbar/Navbar";
import { Footer } from "Footer/Footer";
import "./About.css"
import weweshop from "images/WEWESHOP.png"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import studio1 from "../images/studio1.jpg"
import studio2 from "../images/studio2.jpg"
import studio13 from "../images/studio13.jpg"
import studio4 from "../images/studio4.jpg"
import studio5 from "../images/studio5.jpg"
import studio6 from "../images/studio6.jpg"
import studio7 from "../images/studio7.jpg"
import studio8 from "../images/studio8.jpg"
import studio9 from "../images/studio9.jpg"
import studio10 from "../images/studio10.jpg"
import studio11 from "../images/studio11.jpg"
import studio12 from "../images/studio12.jpg"
import { Paper } from "@mui/material";
import { motion } from "framer-motion";


export const About = () => {

    const itemData = [
        {
          img: studio7,
          title: 'creative studio',
          rows: 2,
          cols: 2,
        },
        {
          img: studio2,
          title: 'creative studio',
        },
        {
          img: studio13,
          title: 'Camcreative studioera',
        },
        {
          img: studio4,
          title: 'creative studio',
          cols: 2,
        },
        {
          img: studio5,
          title: 'creative studio',
          cols: 2,
        },
        {
          img: studio8,
          title: 'creative studio',
          rows: 2,
          cols: 2,
        },
        {
          img: studio1,
          title: 'creative studio',
        },
        {
          img: studio6,
          title: 'creative studio',
        },
        {
          img: studio9,
          title: 'creative studio',
          rows: 2,
          cols: 2,
        },
        {
          img: studio10,
          title: 'creative studio',
        },
        {
          img: studio11,
          title: 'creative studio',
        },
        {
          img: studio12,
          title: 'creative studio',
          cols: 2,
        },
      ];

    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }

    return(
        <div className="about">
            <div className="navbar">
            <Navbar/>
            </div>

            <div className="introduction">

                <div className="about-image">
                
                <ImageList
                sx={{ height: 760, width: 600 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
                >
                    {itemData.map((item) => (

                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                            // style={{":hover": {boxShadow: '10px 5px 5px'}}}
                        />
                    </ImageListItem>
                    ))}
                </ImageList>
            
                </div>

               
                <div className="introduction-text">
                <Paper elevation={3} sx={{backgroundColor:'Bisque', padding: 2}}>
                    <img src={weweshop} alt="weweshop" width={300}></img>

                    <p  style={{fontSize: 20, textAlign: "justify"}}>
                        WEWE SHOP is a creative store that collaborates with manufacturers worldwide to bring you the best and most unique products from around the globe. 
                        From design to production, every item reflects innovation and originality, whether crafted through advanced manufacturing technology or expert handcrafting techniques. 
                        With a commitment to quality and creativity, WEWE SHOP ensures that each product meets the highest standards, blending cutting-edge machinery with perfect craftsmanship. 
                        Our mission is to provide customers with exceptional and inspiring products, making everyday life more exciting and stylish.
                    </p>
                    </Paper>
                </div>
        </div>

        <div className="home-footer">
            <Footer/>
        </div>

        </div>
    )
}