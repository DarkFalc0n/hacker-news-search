import React from 'react'

import "./SearchResults.css";

const Result = (props) => {
    return (
    <div key={props.objectID} className="result-wrapper">
        <div className="result-title">
            { props.title }
            </div>
        <div className="result-author">
            - { props.author }
        </div>
    </div>
  )
}

export default Result