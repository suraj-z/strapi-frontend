import './header.css'
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    
    return (
        <div className="text">
            <Link to="/">
                <h1 className=" d-flex justify-content-center texts"> Acumedia- EQUIP BID </h1>
                <h3 className=" d-flex justify-content-center texts"> Click. Bid. Buy.</h3>

            </Link>

        </div>
    )
}