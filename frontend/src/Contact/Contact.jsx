import React from "react";
import { Navbar } from "Navbar/Navbar";
import { Footer } from "Footer/Footer";
import Grid from '@mui/material/Grid2';
import { Box } from "@mui/material";
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import contactUs from 'images/contactUs.png';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";


export const Contact = () =>{

    const ariaLabel = { 'aria-label': 'description' };

    return(
        <div>
            <Navbar/>

            
            <Grid container spacing={2} sx={{marginTop: '200px', marginBottom: '100px', width: '80%', position: 'relative', marginLeft: 'auto', marginRight: 'auto'}}>
                <Grid size={5}>

                <motion.div
                        initial={{ x: -100, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 1 }}
                    >

                    <Box
                    sx={{
                        backgroundImage: 'linear-gradient(#fff7ad, #ffa9f9)',
                        // padding: 3,
                        borderRadius: 3, 
                        height: '75vh',
                        width: '100%',
                        textAlign: 'center',
                        }}>
                    
                        <img src={contactUs} alt="contact us" width={'90%'} height={'90%'} style={{borderRadius: '3%', marginTop: '5%',}}/>
                        </Box>

                    </motion.div>
                </Grid>
                    
                
                
                <Grid size={7} >
                    <Box
                    sx={{
                        backgroundColor: 'AntiqueWhite',
                        borderRadius: 3, 
                        height: '75vh',
                        width: '100%',
                        textAlign: 'center',
                        placeItems: 'center'
                        }}>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 1 }}
                    >

                    <Grid container direction="column" spacing={10}  sx={{justifyContent: "center", alignItems: "center"}}>
                        <h1 style={{color:"grey"}}>Contact Us</h1>
                        <Input placeholder="First name" inputProps={ariaLabel} sx={{width: '30%'}} />

                        <Input placeholder="Last name" inputProps={ariaLabel} sx={{width: '30%'}} />
                    
                        <Input placeholder="Email" inputProps={ariaLabel} sx={{width: '30%'}} />
                    
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        // defaultValue="Message"
                        placeholder="Message"
                        sx={{width: '70%'}}
                    />

                    <Button variant="outlined" sx={{width: '50%', color: 'black', borderColor: 'black'}}>Send</Button>
                    </Grid>

                    </motion.div>


                    </Box>
                </Grid>
            </Grid>

            <div className="home-footer">
            <Footer/>
            </div>
        </div>
    )
}