import React,{useState} from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";

function SignIn(){
    const[contact,setContact]= useState({
       email:"",
       password:"" 
    });

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
        setContact({
            email:"",
            password:""
        })
        event.preventDefault();

    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput type="email" label="email" handleChange={handleChange} name="email" value={contact.email} required />
               
                <FormInput type="password" label="password" handleChange={handleChange} name="password" value={contact.password} required/>
                
                <input type="submit" onClick={submitForm} value="submit form "/>
            </form>
        </div>
    )
}

export default SignIn;