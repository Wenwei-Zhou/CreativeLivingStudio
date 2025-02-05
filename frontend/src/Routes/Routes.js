import React from "react";
import {Home} from "Home/Home"
import {About} from "About/About"
import { Login } from "authentication/Login";
import { Contact } from "Contact/Contact";
import { All } from "Store/All/All";
import { Electronics } from "Store/Electronics/Electronics";
import { HomeStore } from "Store/HomeStore/HomeStore";
import { Outfit } from "Store/Outfit/Outfit";
import { Pet } from "Store/Pet/Pet";


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
        path: "/Contact",
        element: <Contact/>,
    },
    {
        path: "/All",
        element: <All/>,
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
        path: "*",
        element: <Home/>,
    },
]