import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router";
import "./ProductDetail.css"
import { Footer } from "Footer/Footer";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import { motion } from "framer-motion";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useProfileContext} from "useContext/useProfileContext"


export const ProductDetail = () => {

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


    // const id = useParams();

    const navgiate = useNavigate();

    const [detail, setDetail] = useState([]);

    const [searchParams] = useSearchParams();

    const firebaseCollection = searchParams.get('category')
    const firebaseDocument = searchParams.get("id")

    useEffect(() => {
        const fetchdata = async () => {
            const docRef = doc(db, firebaseCollection, firebaseDocument);
            const docSnap = await getDoc(docRef)

            if(docSnap.exists())
            {
                console.log(docSnap.data())
                setDetail(docSnap.data());
            }
            else
            {
                console.log("No such document! Cannot get data!")
            }
            
        }
        fetchdata();
    }, [db, firebaseCollection, firebaseDocument]);
    
    console.log(detail);

/////////////////////////////////////////////////////////////////////

const {addCart} = useProfileContext();

const [alert, setAlert] = useState('');

const handleAddCart = (product, image, name, price) => {
    addCart(product, image, name, price)

    setAlert('Add to cart successful, check in profile')
    setTimeout(() => setAlert(''), 2000)
}

/////////////////////////////////////////////////////////////////////

    const imageList = [detail.image, detail.image2];

    const [sliderIndex, setSliderIndex] = useState(0)

    useEffect(() => {
        if(sliderIndex < 0)
            {
                setSliderIndex(imageList.length - 1)
            }
        
        if(sliderIndex > imageList.length - 1)
            {
                setSliderIndex(0)
            }
    }, [sliderIndex, imageList.length])

    function handlePrevious()
    {
        setSliderIndex((previous) => (previous === 0 ? imageList.length-1 : previous-1))
    }

    function handleNext()
    {
        setSliderIndex((next) => (next === imageList.length-1 ? 0 : next+1))
    }

    return(
        <div className="product-detail">
            <br></br>
            <div className="detail-navbar">

                <IconButton
                onClick={() => navgiate(-1)}
                style={{width:'auto', height:'auto', padding:'5px'}}
                >
                    <ArrowBackIosNewIcon style={{color:'tomato', fontSize:'40px'}}/>
                </IconButton>

                {/* <div>
                <Link to="/">
                <img className="logo" src={logo} alt="WEWESHOP" width={90} height={74}></img>
                </Link>
                </div> */}
                
            </div>

            <div className="detail">
                {/* Not [{}], don't need to use map() */}
                <div className="detail-image">
                <ArrowCircleLeftOutlinedIcon sx={{fontSize:30, cursor: "pointer"}} onClick={handlePrevious}/>

                <div>
                <img src={imageList[sliderIndex]} alt="product" width={500} height={400} style={{borderRadius:'10px'}}></img>

                {imageList.map((imageList, index) => (
                        <img src={imageList} alt="product" width={index === sliderIndex ? 50 : 30} height={index === sliderIndex ? 50 : 30} 
                            style={{
                                opacity: index === sliderIndex ? 1 : 0.5,
                            }}
                        >
                        </img>
                    ))}
                </div>

                <ArrowCircleRightOutlinedIcon sx={{fontSize:30, cursor: "pointer"}} onClick={handleNext}/>

                </div>
                
                <div className="detail-text">
                <Grid>
                    <h1 style={{color:"black", fontSize:'25px', fontFamily:'monospace'}}>{detail.name}</h1>
                    
                    <h1 style={{color:"black", fontSize:'25px'}}>AU ${detail.price}</h1>
                        
                    <Button 
                    variant="contained" 
                    sx={{backgroundColor:"darkorange",":hover":{backgroundColor:'orange', boxShadow: '5px 3px 3px orange'}}}
                    onClick={() => handleAddCart(detail.name, detail.image, detail.name, detail.price)}
                    >
                        + Add to cart
                    </Button>

                    <Stack sx={{width: '100%'}} spacing={2}>
                    {alert && <Alert severity="success">{alert}</Alert>}
                    </Stack>

                </Grid>
                    
                <br></br>

                
                <Paper sx={{color:"black", padding:'5px'}}>
                <p>
                    <h3>Description</h3>
                    {detail.description}
                </p>
                
                <h3>Size:</h3>
                <Grid container spacing={3} sx={{alignItems:'center'}}>
                       
                    <Grid>
                        <p>Width: {detail.width}</p>
                    </Grid>
                    <Grid>
                        <p>Length: {detail.length}</p>
                    </Grid>
                    <Grid>
                        <p>Height: {detail.height}</p>
                    </Grid>
                </Grid>

                <h3>Size:</h3> 
                <Grid container spacing={1} rowGap={1} sx={{alignItems:'center'}}>

                    <Grid>
                        <p>Small: {detail.small}</p>
                    </Grid>
                    <Grid>
                        <p>Median: {detail.median}</p>
                    </Grid>
                    <Grid>
                        <p>Large: {detail.large}</p>
                    </Grid>
                </Grid>
                </Paper>

                </div>
            </div>

            {/* <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="product-container"
            >
                <Card sx={{ display: "flex", width: "80%", margin: "auto", boxShadow: 3 }}>
                    
                    <CardMedia
                        component="img"
                        image={detail.image}
                        alt={detail.name}
                        sx={{ width: "40%", objectFit: "contain", padding: 2 }}
                    />

                    <CardContent sx={{ flex: 1, padding: 3 }}>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                            {detail.name}
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
                            ${detail.price}
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            {detail.description}
                        </Typography>
                        <Button variant="contained" color="secondary" sx={{ marginTop: 3 }}>
                            Add to Cart
                        </Button>
                    </CardContent>
                </Card>
            </motion.div> */}

            <div className="home-footer">
                        <Footer/>
                </div>
        </div>
    )
}