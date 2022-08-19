import { React, useState } from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";
import "./HomePage.css";
import LoadingScreen from '../../components/LoadingScreen.js/LoadingScreen';
import NetworkError from '../../components/NetworkError/NetworkError';

const HomePage = () => {

  const [results, setResults] = useState([]);
  const [resultState, setResultState] = useState("notsearched");

  const fetchResults = async (searchTerm) => {
    setResultState("loading");
    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`).catch(err => {
      setResultState("networkerror")
    });
    const fetchedResults = await response.json();
    setResults(fetchedResults);
    setResultState("loaded");
  }

  return (
    <div className="homepage-wrapper">
      <Navbar />
      <SearchBar fetch={fetchResults} resultState={resultState} />
      {(resultState === "loaded") ? <SearchResults results={results} resultState={resultState} /> : <></>}
      {(resultState === "loading") && <LoadingScreen />}
      {(resultState === "networkerror") && <NetworkError />}
      <Footer />
    </div>
  )
}


export default HomePage