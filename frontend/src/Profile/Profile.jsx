import React, { useState } from "react";
import './Profile.css'
import { Navbar } from "Navbar/Navbar";
import {useAuthContext} from "useContext/useAuthContext";
import {useProfileContext} from "useContext/useProfileContext"
import { Link } from "react-router";
// import { doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Grid from '@mui/material/Grid2';
import { Button, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Order } from 'Profile/Order';
import { Information } from "./Information";

// const firebaseConfig = {
//     apiKey: "AIzaSyCpdyNFZTAcGZjCVxTqxDiiLx3XW2E8OD0",
//     authDomain: "creativelivingstudio-4dde4.firebaseapp.com",
//     projectId: "creativelivingstudio-4dde4",
//     storageBucket: "creativelivingstudio-4dde4.firebasestorage.app",
//     messagingSenderId: "982129293782",
//     appId: "1:982129293782:web:5f80082d2e5f9993668c77",
//     measurementId: "G-GKTH553LG9"
//   };
  
  
//   const app = initializeApp(firebaseConfig);
  
  
  
//   const db = getFirestore(app);

export const Profile = () => {

    const { Logout, Authenticated } = useAuthContext();

    const {userData, firstName} = useProfileContext();

    const email = Authenticated();

    console.log("check in profile component: ", email);
    console.log("check in profile component: ", userData);


    // const [order, setOrder] = useState(true);
    // const [information, setInformation] = useState(false);
    const [select, setSelect] = useState(true);

    const handleShow = () => {setSelect(true);}
    const handleHide = () => {setSelect(false);}



    // const handleSelect = (prev) => setSelect(prev = !prev)



    // console.log(firstname);
    // console.log(lastname);
    // console.log(userData);

    // const [profileData, setProfileData] = useState(null);

    // const [firstname, setFirstname] = useState(null);
    // const [lastname, setLastname] = useState(null);

    // const [userData, setUserData] = useState(null);

    // const [firstName, setFirstName] = useState(null);
    // const [lastName, setLastName] = useState(null);

    // useEffect( () => {

    //             const GetProfileData = async () => {
        
    //                 console.log("check email in the function: ", email);
    //                 if(!email){
    //                     console.log('email is null');
    //                 }
    //                 else{
    //                     console.log('yes, we got email: ', email)
    //                 }
        
    //                 try{
    //                     const docRef = doc(db, "authentication", email);
    //                     const docSnap = await getDoc(docRef);
        
    //                     if (docSnap.exists()) {
    //                         console.log("Document data:", docSnap.data());
    //                         const data = docSnap.data();
    //                         // setUserData(data); fail
    //                         setUserData(docSnap.data());
        
    //                         console.log("inside try catch: ", data)
    //                         console.log("inside try catch: ", data.firstName)
    //                         console.log("inside try catch: ", data.lastName)
        
    //                         setUserData(data);
    //                         setFirstName(data.firstName);
    //                         setLastName(data.lastName);
                            
    //                     } else {
    //                         // docSnap.data() will be undefined in this case
    //                         console.log("No such document! Maybe no such email in the database (collection: authentication)!");
    //                     }
    //                 }catch(error)
    //                 {
    //                     console.error("Error fetching profile data: ", error);
    //                 }
        
    //             }

    //             GetProfileData();
    //     }, [email])


        

    return(
        <div className="profile">
            <Navbar/>
            
            <div className="profile-head">

                <div>
                    <h1 style={{fontFamily: 'Georgia', color: "darkorange"}}>Hi, {firstName}</h1>
                </div>
                <div>
                    <Button
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'AntiqueWhite',
                        color: 'grey',
                        textDecoration: 'none',
                        ":hover": {opacity: '0.6'}
                    }}
                    onClick={Logout}
                    as = {Link} to={"/"}
                    >
                        Log out<LogoutIcon/>
                    </Button>
                </div>

            </div>

            <div className="profile-grid">
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 4 }}>
                    <Box 
                    sx={{
                        backgroundColor: 'AntiqueWhite',
                        padding: 3,
                        borderRadius: 3, 
                        height: '70vh', 
                        overflowX:'hidden', 
                        overflowY: 'auto',
                        // ":hover": {overflowY: 'scroll'},
                        }}>
                            <Button 
                            sx={{
                                variant:'text',
                                color: select ? 'grey' : '#E38F1F', // select inital value is true, so display grey first, when click button, change color to #E38F1F
                            }}
                            onClick={handleShow}
                            >
                                <h3>Orders & Returns</h3>
                            </Button>

                            <hr></hr>

                            <Button 
                            sx={{
                                
                                color: select ? '#E38F1F' : 'grey', // select inital value is true, so display #E38F1F first, when click button, change color to grey
                            }}
                            onClick={handleHide}
                            >
                                <h3>user information</h3>
                            </Button>
                    </Box>
                </Grid>

                <Grid size={{ xs: 6, md: 8 }}>
                    <Box
                    sx={{
                        backgroundColor: 'AntiqueWhite',
                        padding: 3,
                        borderRadius: 3, 
                        height: '70vh', 
                        overflowX:'hidden', 
                        overflowY: 'auto',
                        // ":hover": {overflowY: 'scroll'},
                        }}>
                            {select ? <Order/> : <Information/>}
                    </Box>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}