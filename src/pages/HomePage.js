import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";

const HomePage = () => {
  return (
      <div className="homepage-wrapper">
          <Navbar />
          <SearchBar />
          <Footer />
      </div>    
  )
}

export default HomePage