import React from "react";
import {Home} from "Home/Home"
import {About} from "About/About"
import { Login } from "authentication/Login";
import { Signup } from "authentication/Signup";
import { Profile } from "Profile/Profile";
import { Contact } from "Contact/Contact";
import { Electronics } from "Store/Electronics/Electronics";
import { HomeStore } from "Store/HomeStore/HomeStore";
import { Outfit } from "Store/Outfit/Outfit";
import { Pet } from "Store/Pet/Pet";
import { ProductDetail } from "Store/ProductDetail/ProductDetail";
import { NotFound } from "NotFound/NotFound";

export const routes =[
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/About",
        element: <About/>,
    },
    {
        path: "/Login",
        element: <Login/>,
    },
    {
        path: "/Signup",
        element: <Signup/>,
    },
    {
        path: "/Profile",
        element: <Profile/>,
    },
    {
        path: "/Contact",
        element: <Contact/>,
    },
    {
        path: "/Electronics",
        element: <Electronics/>,
    },
    {
        path: "/HomeStore",
        element: <HomeStore/>,
    },
    {
        path: "/Outfit",
        element: <Outfit/>,
    },
    {
        path: "/Pet",
        element: <Pet/>,
    },
    {
        // path: "/ProductDetail/:category/:id",
        path: "/ProductDetail",
        element: <ProductDetail />,
    },
    {
        path: "*",
        //element: <Home/>,
        element: <NotFound/>,
    },
]