import { React, useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults/SearchResults";
import "./HomePage.css";

const HomePage = () => {

  const [results, setResults] = useState([]);
  const [resultState, setResultState] = useState("notsearched");

  const fetchResults = async (searchTerm) => {
    setResultState("loading");
    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`);
    const fetchedResults = await response.json();
    setResults(fetchedResults);
    console.log (fetchedResults.hits); 
    setResultState("loaded");
    console.log("loaded");
  }

  return (
      <div className="homepage-wrapper">
        <Navbar />
      <SearchBar fetch={fetchResults} resultState={resultState} />
      {(resultState === "loaded") ? <SearchResults results={results} resultState={resultState} /> : <div />}
      <Footer />        
      </div>    
  )
}


export default HomePage