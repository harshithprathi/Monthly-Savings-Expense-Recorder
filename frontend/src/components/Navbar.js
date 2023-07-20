import React,{useState} from 'react';
import '../../src/styles.css';
import { Link, useNavigate } from "react-router-dom";


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     console.log(isOpen);
//     if(isOpen) {
//         setIsOpen(false);
//         console.log(isOpen);
//     }
//     else {
//         setIsOpen(true);
//         console.log(isOpen);
//     }
    
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="company-logo">Logo</div>
//         <div className="company-name">Company Name</div>
//       </div>
//       <div className={`navbar-options ${isOpen ? 'open' : ''}`}>
//         <div className="navbar-option">Pie Diagrams</div>
//         <div className="navbar-option">Savings Graphs</div>
//       </div>
//       <div className="navbar-right">
//         <div className="navbar-button">Edit Profile</div>
//         <div className="navbar-button">Logout</div>
//       </div>
//       <div className="navbar-toggle" onClick={handleToggle}>
//         <div className={`toggle-bar ${isOpen ? 'open' : ''}`}></div>
//         <div className={`toggle-bar ${isOpen ? 'open' : ''}`}></div>
//         <div className={`toggle-bar ${isOpen ? 'open' : ''}`}></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="company-logo">Logo</div>
//         <div className="company-name">Company Name</div>
//       </div>
//       <div className={`navbar-options ${isOpen ? 'open' : ''}`}>
//         <div className="navbar-option">Pie Diagrams</div>
//         <div className="navbar-option">Savings Graphs</div>
//       </div>
//       <div className="navbar-right">
//         <div className="navbar-button">Edit Profile</div>
//         <div className="navbar-button">Logout</div>
//       </div>
//       <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
//         <div className="toggle-bar"><div className="navbar-option">Pie Diagrams</div>
//         <div className="navbar-option">Savings Graphs</div>
//         <div className="navbar-button">Edit Profile</div>
//         <div className="navbar-button">Logout</div></div>
//         {/* <div className="toggle-bar"></div>
//         <div className="toggle-bar"></div> */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title,settitle] = useState(false);
  const navigate=useNavigate();
  function handletitle(){
    settitle(true);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePie = () => {
    navigate('/piepage');
  };
  const handledashboard = () => {
    navigate('/dashboard');
  };
  const handlegraph= () => {
    navigate('/savingsgraph');
  };
  const handleprofile= () => {
    navigate('/profile');
  };
  const handlelogout = () => {
    localStorage.removeItem('user');
    alert("Successfully logged out");
    navigate('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src={require('../images/project_logo2.png')} alt="Logo" className="logo" />
      <h1 className="company-title" onMouseOver={handletitle} onMouseOut={()=>{settitle(false)}}>{title?<Link to="/dashboard" style={{textDecoration: 'none', color:"black", fontWeight:"bolder" , fontSize: "22px" }} >Monthly Savings & Expenses Recorder</Link>:<Link to="/dashboard" style={{ textDecoration: 'none', color:"black" }} >MS & ER</Link>}</h1>
      </div>
      <div className={`navbar-options ${isOpen ? 'open' : ''}`}>
        <div className="navbar-option" onClick={handledashboard}>Home</div>
        <div className="navbar-option" onClick={handlePie}>Pie Diagrams</div>
        <div className="navbar-option" onClick={handlegraph}>Savings Graph</div>
      </div>
      <div className="navbar-right">
        <div className="navbar-button" onClick={handleprofile}>Edit Profile</div>
        <div className="navbar-button" onClick={handlelogout}>Logout</div>
      </div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
      </div>
      {isOpen && (
        <div className="navbar-dropdown">
          <div className="navbar-dropdown-option" onClick={handledashboard}>Home</div>
          <div className="navbar-dropdown-option" onClick={handlePie}>Pie Diagrams</div>
          <div className="navbar-dropdown-option" onClick={handlegraph}>Savings Graph</div>
          <div className="navbar-dropdown-option" onClick={handleprofile}>Edit Profile</div>
          <div className="navbar-dropdown-option" onClick={handlelogout}>Logout</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

