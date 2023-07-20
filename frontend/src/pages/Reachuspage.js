import React from 'react'
import Header from "../components/Header";
import Footer from "../components/footer";
import '../../src/styles.css';
import Reachus from '../components/Reachus';

const Reachuspage = () => {
  return (
    <div className='reachcontainer'>
        <Header />
        <Reachus />
        <Footer />
    </div>
  )
};

export default Reachuspage;