
import React, { useState } from 'react';
import '../../src/styles.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import BASE_URL from '../constants/constant';
// import Parse from 'parse/dist/parse.min.js';



const bcryptjs = require("bcryptjs");
// import { Link, useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState("password");
  const navigate=useNavigate();
  const [loggedInUser,setloggedInUser] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        await axios.post(`${BASE_URL}/api/auth2/login`, { email: email, password: password })
        .then(res => {
          // console.log(res)
            if(res.data==="fail"){
                alert("Failed");
            }
            else{
                // console.log(res.data);
                const result = bcryptjs.compare(password, res.data.password);
                if(!res.data){
                    alert("Email not found, please SignUp");
                }
                
                else if(result){
                    localStorage.setItem('user',JSON.stringify(res.data.email));
                    const id=JSON.parse(localStorage.getItem('user'));
                    alert(
                      `Success! User ${id.split('@')[0]} has successfully signed in!`
                    );
                    navigate('/dashboard');
                    setloggedInUser(res.data.email);
                    
                }
                else{
                    alert("Incorrect password");
                }
                
            }
            // console.log(res)
        })
      

    }catch (error) {
        // Handle error from backend
        console.log('Error:', error);
    }


    // Handle login logic here
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign-In logic here
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };

  const togglePassword =(e)=>{
    setPassword(e.target.value);
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email" className='loglabel'>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='inpp'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='loglabel'>Password:</label>
          <input
            type={passwordType}
            id="password"
            value={password}
            onChange={togglePassword}
            className='inpp'
          />
          
          
        </div>
        <div className="form-group">
          <button type="submit" className="login-button" onSubmit={handleSubmit}>Login</button>
        </div>
        <div className="form-group">
          <button type="button" className="google-signin-button" onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
        </div>
        <div className="form-group">
          <button type="button" className="forgot-password-button" onClick={handleForgotPassword}>
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;