import {React, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import "./SearchBar.css"



const SearchBar = (props) => {
    const searchBar = useRef();
    const keyPressHandler = (event) => {
        if (event.key === 'Enter')
            props.fetch(searchBar.current.value);
    }
    return (
        <div className="search-wrapper" onKeyPress={keyPressHandler}>
            <div className={(props.resultState === 'notsearched') ? "search-main center" : "search-main"}>
                <input placeholder="Search all of Hacker News" ref={searchBar} className="search-field"></input>
                <button className="search-btn" onClick={() => {
                    if(searchBar.current.value !== "")
                        props.fetch(searchBar.current.value);
                }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    )
}

export default SearchBar