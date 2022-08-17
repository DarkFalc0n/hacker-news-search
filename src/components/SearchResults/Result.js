import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

import "./SearchResults.css";
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faUpRightFromSquare';

const Result = (props) => {
    return (
        <Link to={`/details/${props.objectID}`}>
            <div key={props.objectID} className="result-wrapper">
                <div>{(props.title === "" || props.title === null) ?
                    <div className="result-title text-disabled text-italic">
                        No title available
                    </div> :
                    <div className="result-title ">
                        {props.title}
                    </div>
                }
                    <div className="result-author">
                        - {props.author}
                    </div></div>
                <FontAwesomeIcon icon={faUpRightFromSquare} className="result-link-icon" />
            </div>
        </Link>
    )
}

export default Result