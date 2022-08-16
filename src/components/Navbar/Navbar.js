import React from 'react';
import {Link} from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
        <div className="navbar-logo">
            <Link to='/'>
                <div className="navbar-logo-title"><div className="navbar-logo-title navbar-highlight">Hacker News</div> Search</div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar