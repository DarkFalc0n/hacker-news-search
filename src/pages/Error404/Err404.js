import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import "./Err404.css";
const Err404 = () => {
    return (
        <div className="err404page-wrapper">
            <Navbar />
            <div className="errorpage-wrapper">
                404
                <div className="error-message">
                    Oops! We could not find the page you are looking for
                </div>
                <div className="home-link">
                    <a href="/" exact id="home-button">
                        Go back to search
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Err404