// First Name, Last Name, Email, Gender, Occupation as dropdown bar, Password, Confirm Password.
import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import { Link, useNavigate } from "react-router-dom";
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import { useGoogleLogin } from '@react-oauth/google';
import '../../src/styles.css';
const bcryptjs = require("bcryptjs");

// import { toast } from 'react-toastify';
// import {useDispatch} from "react-redux";
// import { login, register, verifyOtp, forgotPassword, resetPassword, oauthLogin } from '../../api/auth';

// import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    occupation: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const[searchtext,setSearchText] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const history = useNavigate();

  // const History = useNavigate();
  // const [verificationSent, setVerificationSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Send form data to backend and store in database using Mongoose
        const hashpassword=bcryptjs.hashSync(formData.password);
        formData.password=hashpassword;
        history('/login');
        await axios.post('http://127.0.0.1:4000/api/auth1/signup', formData);
        alert('Signup successful');
        
        // setVerificationSent(true);
      } catch (error) {
        // Handle error from backend
        console.log('Error:', error.response.data);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');


  const validateForm = () => {
    const validationErrors = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'First Name is required';
    }

    if(/[!@#$%^&*(),.?":{}|<>]/g.test(formData.firstName.trim()) || !/^[A-Z]/.test(formData.firstName.trim()) || /\d+/g.test(formData.firstName.trim())){
      validationErrors.firstName = 'Improper Name format';
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'Last Name is required';
    }

    if(/[!@#$%^&*(),.?":{}|<>]/g.test(formData.lastName.trim()) || !/^[A-Z]/.test(formData.lastName.trim()) || /\d+/g.test(formData.lastName.trim())){
      validationErrors.lastName = 'Improper Name format';
    }


    if (!validator.isEmail(formData.email.trim())) {
      validationErrors.email = 'Invalid Email';
    }

    if (!formData.gender) {
      validationErrors.gender = 'Gender is required';
    }

    if (!formData.occupation) {
      validationErrors.occupation = 'Occupation is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if(!validPassword.test(formData.password)){
      validationErrors.password = 'Password should contain atleast 1 Uppercase, 1 lowercase letters, numbers and symbols';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    return validationErrors;
  };

  // const handleGoogleAuthSuccess = (response) => {
  //   const { givenName, email } = response.profileObj;
  //   setFormData({
  //     ...formData,
  //     firstName: givenName,
  //     email
  //   });
  // };

  // const handleGoogleLogin = useGoogleLogin({
  //   onSuccess: tokenResponse => {
  //       const { access_token: accessToken } = tokenResponse;

  //       dispatch(oauthLogin(accessToken, 'google'));
  //   },
  //   onError: err => toast.error(err)
  // });

  function handleoccupation(event) {
    setSearchText(event.target.value);
    setFormData({ ...formData, occupation: searchtext });
  };


  return (
    <div className='fulll'>
        <div className='signup-container'>
          <h2>Sign Up</h2>
          {/* {verificationSent ? (
            <p>A verification email has been sent to your email address. Please check your inbox.</p>
          ) : ( */}
            <form action='POST' onSubmit={handleSubmit}>
              <div className='details'>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <span className='signuperrors'>{errors.firstName}</span>}
              </div>

              <div className='details'>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <span className='signuperrors'>{errors.lastName}</span>}
              </div>

              <div className='details'>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className='signuperrors'>{errors.email}</span>}
              </div>

              <div className='details'>
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && <span className='signuperrors'>{errors.gender}</span>}
              </div>

              <div className='details'>
                <label>Occupation:</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                />
                {errors.occupation && <span className='signuperrors'>{errors.occupation}</span>}
              </div>

            

              <div className='details'>
                <label>Password:</label>
                <input
                  type={passwordType}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <span className='signuperrors passerr'>{errors.password}</span>}
              </div>

              <div className='details'>
                <label>Confirm Password:</label>
                <input
                  type={passwordType}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && <span className='signuperrors'>{errors.confirmPassword}</span>}
              </div>
              <div className='details'>
              <button type="submit" className='signup-submit' onSubmit={handleSubmit} >Sign Up</button>
              </div>
              <div className='details already'>
                <p>Already Have an Account? </p>
                <Link to="/login" className='already'>Login Here</Link>
              </div>
            </form>

          
        </div>
    </div>
  );
};

export default SignUpPage;
