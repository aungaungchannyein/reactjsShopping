import React,{useState} from "react";
import "./password-reset.styles.scss";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {sendPasswordReset } from "../../firebase/firebase";
function PasswordReset(){
    const[email,setEmail]=useState("");

    function handleChange(event){
        setEmail(event.target.value)
    }

    function submitForm(event){
        sendPasswordReset(email)
        event.preventDefault();

    }

    return(
        <div className="reset-email">
        <h2 className="title">Reset Password</h2>
        <form class="reset-form">
        <FormInput onSubmit={submitForm}
        type="email" 
        name="email" 
        value={email} 
        onChange={handleChange}
        label="Email"
        required />
    
        <CustomButton  type="submit"> Send password reset email</CustomButton>
        
        </form> 
        Don't have an account? <Link to="/signin" style={{textDecoration:"underline",color:"blue"}}>Register</Link> now.
         </div>
    )
}

export default PasswordReset;