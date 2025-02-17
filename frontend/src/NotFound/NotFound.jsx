import React from "react";
import { Link } from "react-router";

export const NotFound = () => {
    return(
        <div>
            <h1>404 NotFound, cannot find page</h1>
            <Link to={"/"}>back to home page</Link>
        </div>
    )
}