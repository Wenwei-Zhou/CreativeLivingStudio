import * as React from 'react';
import { Navbar } from "Navbar/Navbar";
import { Link, useNavigate } from 'react-router';
import { Formik } from "formik";
import TextField from '@mui/material/TextField';
import * as Yup from "yup";
import "./Login.css"
import { Grid } from '@mui/joy';
import { IconButton, Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "useContext/useAuthContext"
import { useEffect } from 'react';
import { useState } from 'react';

export const Login = () => {

    const {Signin, SigninWithGoogle, userID} = useAuthContext();

    const [showError, setShowError] = useState('');

    // const navigate = useNavigate();

    // const changeToProfile = useCallback(() => {
    //     navigate("/Profile")
    // }, [navigate])
    //!!!!!useCallback(), make changeToProfile execute once

    const changeToProfile = useNavigate();


    useEffect(() => {
        if(userID)
        {
            changeToProfile("/Profile")
            
        }
        else
        {
            console.log("Not login yet")
        }
    }, [userID, changeToProfile])

    return(
        <Formik
            initialValues={{ 
                email: "",
                password: "", 
                submit: null,
            }}

            validationSchema={Yup.object().shape({
                email: Yup.string().max(255).required("Email is required"),
                password: Yup.string().required("Password is required"),
            })}

            onSubmit={async (values, {setErrors, setSubmitting}) => {
                
                try{
                    const emailAddress = values.email.toLowerCase();
                    await Signin(emailAddress, values.password.trim());
                    setSubmitting(false)

                    if(!userID){
                        setShowError('Login Fail - Incorrect email or password');
                    }
                } catch (err)
                {
                    setErrors({submit: err.ErrorMessage});
                    setSubmitting(false);
                }
            }}
        >
            {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
         /* and other goodies */
       }) => (
                <form className='login' onSubmit={handleSubmit}>
                    
                <Navbar/>

                <Grid container spacing={3} mt={1}>

                    <Grid item xs={12}>
                    <h1 style={{color:'tomato', fontSize:'50px'}}>Sign in</h1>
                    </Grid>

                    <Grid 
                        container spacing={2} 
                        mt={2} 
                        sx={{
                            alignItems:'center', 
                            position:'relative', 
                            textAlign:'center', 
                            marginLeft:'auto', 
                            marginRight:'auto'
                        }}
                    >

                        <Grid>
                        <p>Don't have an account?</p>
                        </Grid>

                        <Grid>
                        <Link to="/Signup" style={{color:'tomato', textDecoration:"none"}}>
                            Register
                        </Link>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                    
                        <TextField
                            id="email"
                            label="email"
                            type="email"
                            sx={{backgroundColor:'white', width:'350px'}}
                            // autoComplete="current-email"
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
                        // autoComplete="current-password"
                        disabled={isSubmitting}
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                    />
                    </Grid>
                    
                    <Grid item xs={12}>
                    <Box sx={{ justifyContent: "center", margin: "auto" }}>
                        <IconButton
                        className='signin-button'
                        size="large"
                        type="submit"
                        variant="contained"
                        sx={{backgroundColor:'orange', borderRadius:'50px', width:'350px'}}
                        loading={isSubmitting}
                        disabled={isSubmitting}
                        >
                            Sign In
                        </IconButton>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12}>
                    <Box sx={{ justifyContent: "center", margin: "auto" }}>
                        <IconButton
                        className='signinWithGoogle-button'
                        size="large"
                        variant="contained"
                        sx={{backgroundColor:'white', borderRadius:'10px', width:'350px'}}
                        onClick={SigninWithGoogle}
                        >
                            <FcGoogle/> Sign in with Google
                        </IconButton>
                        </Box>
                    </Grid>

                    <Stack sx={{ width: '35%' }} spacing={2}>
                    {showError && <Alert severity="error">{showError}</Alert>}
                    {/* if showError is '' or (null, undefined), then nothing show (React won't render), else if showError is example:('text'), text inside '', then React will render */}
                    </Stack>
                
                </Grid>
                </form>
       )}
        </Formik>
    )

}