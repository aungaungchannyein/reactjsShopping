import React,{useState} from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


import {
  registerWithEmailAndPassword

} from "../../firebase/firebase";

function SignUp(){
    const [signup,setSignup] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })


    function handleChange(event){
        const {name, value} = event.target;

        setSignup(prevValue =>{
            return{
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitForm(event){
        if(signup.password !== signup.confirmPassword ){
            event.preventDefault();
           alert("password don't match!") 
           return;
        }
        registerWithEmailAndPassword(signup.name, signup.email, signup.password);
        setSignup({
            name:"",
            email:"",
            password:"",
            confirmPassword:""
        });
        event.preventDefault();

    }



    return(<div className="sign-up">
    <h2 className="title">I do not have a account</h2>
    <span>Sign up with your email and password</span>
    <form className="sign-up-form">
    <FormInput 
    type="text" 
    name="name" 
    value={signup.name} 
    onChange={handleChange}
    label="Name"
    required />

    <FormInput 
    type="email" 
    name="email" 
    value={signup.email} 
    onChange={handleChange}
    label="Email"
    required />

    <FormInput 
    type="password" 
    name="password" 
    value={signup.password} 
    onChange={handleChange}
    label="Password"
    required />

    <FormInput 
    type="password" 
    name="confirmPassword" 
    value={signup.confirmPassword} 
    onChange={handleChange}
    label="confirmPassword"
    required />

    <CustomButton onClick ={submitForm} type="submit">Sign Up</CustomButton>
                
    </form>

    
    </div>

    )
}

export default SignUp;