import React from 'react';
import Navbar from "../components/Navbar";
import Footerbar from "../components/footerbar";
import '../../src/styles.css';
import PieChart from '../components/Piechart';


const Piepage = () => {
  return (
    <div className='piepage'>
        <Navbar />
        <PieChart />
        <Footerbar />
    </div>
  )
};

export default Piepage;