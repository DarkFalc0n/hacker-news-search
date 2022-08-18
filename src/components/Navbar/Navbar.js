import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <Link to='/'>
          <div className="navbar-logo-title"><div className="navbar-logo-title navbar-highlight">Hacker News</div> Search</div>
        </Link>
        <div className="navbar-repo">
          <a href="https://github.com/DarkFalc0n/hacker-news-search" className="navbar-link" target="_blank">
            <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;
            View on Github
          </a>
        </div>
      </div>

    </div>
  )
}

export default Navbar