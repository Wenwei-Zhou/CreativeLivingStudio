import React from "react";
import { IconButton, ImageListItem, Button } from "@mui/material";
import { Grid } from "@mui/joy";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useProfileContext} from "useContext/useProfileContext";
import {useAuthContext} from "useContext/useAuthContext";
import { deleteDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export const Order = () => {

    const {Authenticated} = useAuthContext();
    const email = Authenticated();

    const {cart} = useProfileContext();
    cart.map(element => (
        console.log(element.name),
        console.log(element.price),
        console.log(element.id)
    ))


    const deleteOrder = async(id) => {

        console.log(email)
        if(!email) return;
        
        console.log(id);
        if(!id) return;

        const docRef = doc(db, "authentication", email, "cart", id);

        try{
            
            await deleteDoc(docRef);
            console.log(`Deleted item: ${id}`);
        }catch(error){
            console.error("Error deleting order:", error);        
        }
        
    }

    const listStyle = {
        p: 1,
        width: '100%',
        maxWidth: '80%',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      };

    return(
        <Grid>
            <Grid>
                <h1 style={{color: '#E38F1F'}}>Your orders</h1>
            </Grid>
            <hr></hr>
            {/* <Grid>
                <Paper elevation={2} sx={{width: '80%',backgroundColor: 'white', display: 'flex', justifyContent: 'space-between'}}>
                    <div>uhuhu;h</div>
                    <div>ue;owhe;ochweio</div>
                </Paper>
            </Grid> */}
            <Grid>
            
                <List sx={listStyle} aria-label="mailbox folders">
                {cart.map(element => (
                    element.id ? (
                        <ListItem
                        key={element.id}
                        secondaryAction={
                            <IconButton 
                                sx={{
                                    fontSize: 'large', 
                                    ":hover":{opacity: 0.5, backgroundColor: 'transparent'}
                                }}
                                onClick={() => deleteOrder(element.id)}
                            >
                                <RemoveCircleOutlineIcon/>Remove
                            </IconButton>
                        }
                    >
                       
                        <ImageListItem sx={{width: 120}}>
                        <img src={element.image} alt="cart item"></img>
                        </ImageListItem>
    
                        <ListItemText primary={`${element.name}`} secondary={`AU $ ${element.price}`}/>

                    </ListItem>
                    ) : null
                    // <Divider component="li" />
                ))}
                
                </List>
            
            </Grid>

            <Grid>
                <Button variant="contained" sx={{width: '50%'}}>CHECK OUT</Button>
            </Grid>
        </Grid>




    )
}