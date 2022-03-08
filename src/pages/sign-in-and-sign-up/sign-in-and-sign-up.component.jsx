import React,{useEffect} from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {useSelector} from "react-redux";

import { useNavigate } from "react-router-dom";

function SignInAndSignUpPage(){
    const navigate = useNavigate();
    const user = useSelector((state)=> state.user.currentuser);
    useEffect(() => {
        if (user) navigate('/')
      },[user,navigate]);
    return<div className="sign-in-and-sign-up"><SignIn/><SignUp/></div>

    
}

export default SignInAndSignUpPage;