import React, {useState} from "react";
import '../../src/styles.css';
import { Link, useNavigate } from "react-router-dom";
function Header() {
  // const [title,settitle] = useState(false);
  // function handletitle(){
  //   settitle(true);
  // };
  // return (
  //   <header className="header">
  //     <div className="header-left">
  //       <img src={require('../images/project_logo2.png')} alt="Logo" className="logo" />
  //       <h1 className="company-title" onMouseOver={handletitle} onMouseOut={()=>{settitle(false)}}>{title?<Link to="/" style={{textDecoration: 'none', color:"black", fontWeight:"bolder" , fontSize: "22px" }} >Monthly Savings & Expenses Recorder</Link>:<Link to="/" style={{ textDecoration: 'none', color:"black" }} >MS & ER</Link>}</h1>
  //       <nav className="navigation">
  //         <Link to="/About" className="nav-link">About</Link>
  //         <Link to="/reachus" className="nav-link">ReachUs</Link>
  //       </nav>
  //     </div>
  //     <div className="header-right btns">
  //       <Link to="/login"><button className="login-btn">Login</button></Link>
  //       <Link to="/signup"><button className="signup-btn">Signup</button></Link>
  //     </div>
  //   </header>
  // );
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
    navigate('/reachus');
  };
  const handledashboard = () => {
    navigate('/about');
  };
  const handlegraph= () => {
    navigate('/login');
  };
  const handleprofile= () => {
    navigate('/signup');
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
      <h1 className="company-title" onMouseOver={handletitle} onMouseOut={()=>{settitle(false)}}>{title?<Link to="/" style={{textDecoration: 'none', color:"black", fontWeight:"bolder" , fontSize: "22px" }} >Monthly Savings & Expenses Recorder</Link>:<Link to="/" style={{ textDecoration: 'none', color:"black" }} >MS & ER</Link>}</h1>
      </div>
      <div className={`navbar-options ${isOpen ? 'open' : ''}`}>
          <nav className="navigation">
           <Link to="/About" className="nav-link">About</Link>
           <Link to="/reachus" className="nav-link">ReachUs</Link>
          </nav>
      </div>
      <div className="navbar-right">
        <div className="header-right btns">
         <Link to="/login"><button className="login-btn">Login</button></Link>
         <Link to="/signup"><button className="signup-btn">Signup</button></Link>
        </div>
      </div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
      </div>
      {isOpen && (
        <div className="navbar-dropdown">
          <div className="navbar-dropdown-option" onClick={handledashboard}>About</div>
          <div className="navbar-dropdown-option" onClick={handlePie}>ReachUs</div>
          <div className="navbar-dropdown-option" onClick={handlegraph}>Login</div>
          <div className="navbar-dropdown-option" onClick={handleprofile}>Signup</div>
          {/* <div className="navbar-dropdown-option" onClick={handlelogout}>Logout</div> */}
        </div>
      )}
    </nav>
  );
};




export default Header;