import { Grid } from "@mui/joy";
import React from "react";
import { useProfileContext } from "useContext/useProfileContext";
import { useAuthContext } from "useContext/useAuthContext";

export const Information = () => {

    const { firstName, lastName } = useProfileContext();
    const {Authenticated} = useAuthContext();


    

    const email = Authenticated();
    return(
        <Grid>
            <Grid>
                <h1 style={{color: '#E38F1F'}}>Contact Details</h1>
            </Grid>
            <hr></hr>
            <Grid>
                <h4>Firstname: </h4>
                {firstName}
            </Grid>
            {/* <hr></hr> */}
            <Grid>
                <h4>Lastname: </h4>
                {lastName}
            </Grid>
            {/* <hr></hr> */}
            <Grid>
                <h4>Email: </h4>
                {email}
            </Grid>
        </Grid>


    )
}