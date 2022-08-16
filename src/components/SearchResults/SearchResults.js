import { React } from 'react'
import Result from "./Result";

import "./SearchResults.css";

const SearchResults = (props) => {
    return (
        <div className="results-wrapper">
            {(props.results.hits.length === 0) ? "It seems there aren't any great matches...": "Results:"} 
            {props.results.hits.map(({ objectID, title, author, points }) => (
                <Result {...{objectID, title, author, points}} />
            ))}
        </div>

    )
}

export default SearchResults