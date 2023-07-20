import React from 'react'
import Header from "../components/Header";
import Footer from "../components/footer";
import '../../src/styles.css';
import About from '../components/About';

const Aboutpage = () => {
  return (
    <div>
        <Header />
        <About />
        <Footer />
    </div>
  )
};

export default Aboutpage;