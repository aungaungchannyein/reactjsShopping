import React,{useState} from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// import {signInWithGoogle} from "../../firebase/firebase.utils"

import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function SignIn(){
    const[contact,setContact]= useState({
       email:"",
       password:"" 
    });

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // useEffect(() => {
    // if (loading) {
    //   // maybe trigger a loading screen
    //   return;
    // }
    if(user) navigate('/')
        

    function handleChange(event){
        const {name, value} = event.target;

        setContact(prevValue =>{
            return{
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitForm(event){
        logInWithEmailAndPassword(contact.email, contact.password)
        setContact({
            email:"",
            password:""
        });
        event.preventDefault();

    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput type="email" 
                label="email" 
                handleChange={handleChange} 
                name="email" 
                value={contact.email} 
                required />
               
                <FormInput type="password" 
                label="password" 
                handleChange={handleChange} 
                name="password" 
                value={contact.password} 
                required />
                
                <CustomButton onClick ={submitForm} type="submit">Sign in</CustomButton>
                
            </form>
            <div className="google-button">

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
        
            </div>
            </div>
    )
}

export default SignIn;