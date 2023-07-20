import React from 'react';
import Navbar from "../components/Navbar";
import Footerbar from "../components/footerbar";
import '../../src/styles.css';
import EditProfileForm from '../components/Profileedit';


const Profilepage = () => {
  return (
    <div className='profilepage'>
        <Navbar />
        <EditProfileForm />
        <Footerbar />
    </div>
  )
};

export default Profilepage;