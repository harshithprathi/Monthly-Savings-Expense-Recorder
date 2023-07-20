import React from 'react'
import Header from "../components/Header";
import Footer from "../components/footer";
import '../../src/styles.css';
import Login from '../components/Login';

const Loginpage = () => {
  return (
    <div>
        <Header />
        <Login />
        <Footer />
    </div>
  )
};

export default Loginpage;