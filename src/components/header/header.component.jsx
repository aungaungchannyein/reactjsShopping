import React from "react";
import "./header.styles.scss";
import {Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";


import { useAuthState } from "react-firebase-hooks/auth";
import { auth,logout } from "../../firebase/firebase";


function Header(){
    const [user] = useAuthState(auth);
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            { user?
            <div className="option" onClick={logout}>SIGN OUT</div>
            :<Link className="option" to="/signin">SIGN IN</Link>}

            </div>
        </div>

    )
}

export default Header