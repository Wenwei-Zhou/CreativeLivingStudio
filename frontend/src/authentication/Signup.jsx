import React, { useState } from "react";
import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { IconButton, Box, TextField } from "@mui/material";
import { Grid } from '@mui/joy';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Navbar } from "Navbar/Navbar";
import {useAuthContext} from "useContext/useAuthContext"
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import bcrypt from "bcryptjs";


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

const createCart = async (email) => {
    try{
        const docRef = doc(db, "authentication", email);

        const docSnap = await getDoc(docRef);

        if(docSnap.exists())
        {
            const cartColletion = collection(docRef, "cart");

            await setDoc(doc(cartColletion), {
                image: '',
                name: '',
                price: 0,
            });

            console.log("create cart database successful");
        }
        else
        {
            console.log("No such document!");
        }
    }catch(error){
        console.log("create cart error: ", error);
    }
    
}

export const Signup = () => {

    const {Register} = useAuthContext();

    const [showError, setShowError] = useState('')

    const changeToLogin = useNavigate();

    const switchPage = () => {
        
        changeToLogin("/Login")
    }

   return (
    <Formik
       initialValues=
       {{ 
            firstName: "",
            lastName: "",
            email:"",
            password: "", 
            confirmPassword:''
        }}
////////////
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
         password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[0-9]/, 'Password must contain at least one number')
            .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
            .required('Password is required'),
         confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'confirm password is not match')
            .required('confirm password is required')
       })}
////////////
       onSubmit={async (values, { setErrors, setSubmitting }) => {

        const emailAddress = values.email.toLowerCase();

        console.log(emailAddress)

        try{
            const docRef = doc(db, "authentication", emailAddress);
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();

            console.log(data);

            if(docSnap.exists()){
                setShowError('error');
                throw new Error('This email is already registered');
            }

            const docData = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: emailAddress,
                password: bcrypt.hashSync(values.password),

            };

            await Register(emailAddress, values.password.trim());

            await setDoc(doc(db, "authentication", emailAddress), docData);

            await createCart(emailAddress);

            setShowError('success');
            
            setSubmitting(false);

            setTimeout(switchPage, 2000);

        } catch (err)
        {
            setErrors({submit: err.message});
            setSubmitting(false);
        }

       }}
     >
        {(
            {values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,}
        ) => (

            <form
                onSubmit={handleSubmit}
                style={{
                    position: 'relative',
                    textAlign: 'center',
                    marginTop: 250,
                }}
            >

            <Navbar/>

            <Grid container spacing={3} mt={1}>
                    
            <Grid item xs={12}>
                <h1 style={{color:'tomato', fontSize:'50px'}}>Sign up</h1>
            </Grid>

            <Grid item xs={12}>
                <TextField
                    id="firstName"
                    label="firstName"
                    type="text"
                    sx={{backgroundColor:'white', width:'350px'}}
                    disabled={isSubmitting}
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    id="lastName"
                    label="lastName"
                    type="text"
                    sx={{backgroundColor:'white', width:'350px'}}
                    disabled={isSubmitting}
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                />
            </Grid>

            <Grid item xs={12}>            
                <TextField
                    id="email"
                    label="email"
                    type="email"
                    sx={{backgroundColor:'white', width:'350px'}}
                    value={values.email}
                    disabled={isSubmitting}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                />

            </Grid>

            <Grid item xs={12}>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    sx={{backgroundColor:'white', width:'350px'}}
                    disabled={isSubmitting}
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    id="confirmPassword"
                    label="confirmPassword"
                    type="Password"
                    sx={{backgroundColor:'white', width:'350px'}}
                    disabled={isSubmitting}
                    value={values.confirmPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                />
            </Grid>

            <Grid item xs={12}>
            <Box sx={{ justifyContent: "center", margin: "auto" }}>
                <IconButton
                className='register-button'
                size="large"
                type="submit"
                variant="contained"
                sx={{backgroundColor:'orange', borderRadius:'50px', width:'350px'}}
                loading={isSubmitting}
                disabled={isSubmitting}
                >
                    Create Account
                </IconButton>
                </Box>
            </Grid>
            </Grid>

            <Stack sx={{ width: '35%' }} spacing={2}>
                {/* {showError && <Alert severity="error">{error}</Alert>} */}
                
                {
                    showError === 'success' ?                                            /* if() */
                    (<Alert severity="success">Create account successful.</Alert>)       
                    :
                    showError === 'error' ?                                              /* else if() */
                    (<Alert severity="error">This email is already registered</Alert>)
                    :
                    null                                                                 /* else */
                }
            </Stack>

            </form>
        )}
     </Formik>


   );
 };