import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import '../../src/styles.css';
import BASE_URL from '../constants/constant';


const EditProfileForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState('');
  const navigate=useNavigate();
  const user_data=JSON.parse(localStorage.getItem('user'));


  const fetchdata = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/dataupdate/profile`);
        const data = await response.json()|| {};
        let datavals='';
        data.map((item)=>{
            if(item.email===user_data){
                datavals=item;
            }
            else{
                alert('You are logged out, please login again.');
                navigate('/login');
            }
        });
        console.log("datavals",datavals);
        setFirstName(datavals.firstName);
        setLastName(datavals.lastName);
        setOccupation(datavals.occupation);

        
    } catch (error) {
        
    }
  };


  useEffect(() => {
    fetchdata();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to update the profile in the backend
      const response = await axios.patch(`${BASE_URL}/api/dataupdate/profile`, {
        firstName:firstName,
        lastName:lastName,
        occupation:occupation,
        email: user_data,
      })
      .then(response=>console.log('response',response))
      .catch(err =>console.log('error',err));
      
    //   console.log("response",response.data); // Assuming the response contains the updated profile details
      // You can handle success/failure scenarios here
    } catch (error) {
      console.log(error);
      // Handle error scenarios here
    }
  };

  return (
    <form className="edit-profile-form" onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          id="occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default EditProfileForm;
