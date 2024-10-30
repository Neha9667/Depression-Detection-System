import React,{useState} from 'react'
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false);
  return (
    <div>
        <nav>
        <Link to="/" className="title">Website</Link>
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
      <ul className={menuOpen?"open":""}>
            <li><Link to="/" className="header">Home</Link></li>
           <li> <Link to="/about" className="header">About</Link></li>
            <li><Link to="/login" className="header">Login</Link></li>
            <li><Link to="/signup" className="header">Signup</Link></li>
        </ul>
       
      </nav>
    </div>
  )
}

export default Navbar
