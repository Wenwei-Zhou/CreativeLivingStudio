import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import homestoreBackground from "images/HomestoreBackground.png"
import { Link } from "react-router";
import { Navbar } from "Navbar/Navbar";
import { Footer } from "Footer/Footer"
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { motion } from "framer-motion";
import "./HomeStore.css"



export const HomeStore = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyCpdyNFZTAcGZjCVxTqxDiiLx3XW2E8OD0",
        authDomain: "creativelivingstudio-4dde4.firebaseapp.com",
        projectId: "creativelivingstudio-4dde4",
        storageBucket: "creativelivingstudio-4dde4.firebasestorage.app",
        messagingSenderId: "982129293782",
        appId: "1:982129293782:web:5f80082d2e5f9993668c77",
        measurementId: "G-GKTH553LG9"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      //const analytics = getAnalytics(app)
      
      // Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(app);

      const [productlist, setProductlist] = useState([]);

      const collectionName = "homestore";

    useEffect(() => {

        const fetchProduct = async () => {

            const querySnapshot = await getDocs(collection(db, "homestore"));

            // querySnapshot.forEach((element) => {
            //     console.log(element.id, "=>", element.data())
            // });

            
            const products = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setProductlist(products);
        }
        fetchProduct();
    }, [db]);

    console.log(productlist)


    return(
        <div className="homestore">

            <div>
            <Navbar/>
            </div>

            <div className="top-image">
            <img src={homestoreBackground} alt="homestoreBackground" width="100%" height="580px"/>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >

            <div className="homestore-card">
                {productlist.map(product => (
                    <Card key={product.id} sx={{ width: 200, maxWidth: '100%', boxShadow: 'lg' }}>  {/* to set key={product.id}, need key to Re-render */}
                    <CardOverflow>
                        <AspectRatio sx={{ minWidth: 200 }}>
                        <img
                            src={product.image}
                            loading="lazy"
                            alt=""
                        />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
        
                        <Typography level="h3" sx={{fontSize:20}}>{product.name}</Typography>
                        {/* <Link
                        href="#product-card"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        //endDecorator={<ArrowOutwardIcon />}
                        sx={{ fontWeight: 'md' }}
                        >
                        Super Rockez A400
                        </Link> */}
        
                        <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: 'xl' }}
                        endDecorator={
                            <Chip component="span" size="sm" variant="soft" color="success">
                            Lowest price
                            </Chip>
                        }
                        >
                        AU ${product.price}
                        </Typography>
                        {/* <Typography level="body-sm">
                        (Only <b>7</b> left in stock!)
                        </Typography> */}
                    </CardContent>
                    <CardOverflow>
                    
                        <Button
                        variant="solid"
                        size="lg"
                        sx={{backgroundColor: "darkorange", color: "LightCyan", ":hover":{backgroundColor:"orange"}}}
                        as = {Link} to = {`/ProductDetail?category=${collectionName}&id=${product.id}`}
                        >
                        View
                        </Button>
                        
                    </CardOverflow>
                    </Card>
                    ))}
        
                </div>

                </motion.div>
        
                <div className="home-footer">
                        <Footer/>
                </div>
                
            </div>
    )
}