import React from 'react';
import Navbar from "../components/Navbar";
import Footerbar from "../components/footerbar";
import '../../src/styles.css';
import Dashboard from '../components/dashboard';


const Dashboardpage = () => {
  return (
    <div>
        <Navbar />
        <Dashboard />
        <Footerbar />
    </div>
  )
};

export default Dashboardpage;