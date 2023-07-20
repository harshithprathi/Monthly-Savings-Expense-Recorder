import React from 'react';
import Navbar from "../components/Navbar";
import Footerbar from "../components/footerbar";
import '../../src/styles.css';
import SavingsGraph from '../components/Savingsgraph';


const GraphPage = () => {
  return (
    <div className='graphpage'>
        <Navbar />
        <SavingsGraph />
        <Footerbar />
    </div>
  )
};

export default GraphPage;