import React from 'react'
import Header from "../components/Header";
import Footer from "../components/footer";
import '../../src/styles.css';
import SignUpPage from '../components/SignUp';

const Signuppage = () => {
  return (
    <div className='full'>
        <Header />
        <SignUpPage />
        <Footer />
    </div>
  )
};

export default Signuppage;