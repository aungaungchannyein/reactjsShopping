import React from "react";
import "./header.styles.scss";
import {Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {useDispatch} from "react-redux";

import { useAuthState } from "react-firebase-hooks/auth";
import {logout } from "../../firebase/firebase";
import {useSelector} from "react-redux";
import {setCurrentUser} from "../../redux/user/user.action";



function Header(){
    const user = useSelector((state)=> state.user.currentuser);
    const dispatch = useDispatch();
    function logOut(){
        logout();
        dispatch(setCurrentUser(""));
    }
   
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            { user?
            <div className="option" onClick={logOut}>SIGN OUT</div>
            :<Link className="option" to="/signin">SIGN IN</Link>}
            
            </div>
        </div>

    )
}

export default Header