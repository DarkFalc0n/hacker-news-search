import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import "./SearchBar.css"

const SearchBar = () => {
  return (
      <div className="search-wrapper">
          <div className="search-main">
              <input placeholder="Search for anything..." className="search-field"></input>
              <button className="search-btn">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
          </div>
      </div>
  )
}

export default SearchBar