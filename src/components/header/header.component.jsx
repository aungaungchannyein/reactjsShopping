import React from "react";
import "./header.styles.scss";
import {Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";

function Header(){
    return (
        <div className="header">
            <Link class="logo-container" to="/">
                <Logo class="logo"/>
            </Link>
            <div className="options">
            <Link class="option" to="/shop">SHOP</Link>
            <Link class="option" to="/contact">CONTACT</Link>

            </div>
        </div>

    )
}

export default Header