import { React, useEffect, useState } from 'react';
import LoadingScreen from '../LoadingScreen.js/LoadingScreen';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from "../Comments/Comment"

import "./PostData.css";

const PostData = (props) => {
  const dateFormat = {
    year: 'numeric', month: 'short', day: 'numeric'
  }
  const [details, setDetails] = useState("");
  const [creationDate, setCreationDate] = useState(null);
  const [detailsLoadState, setdetailsLoadState] = useState("loading");
  const fetchDetails = async (objId) => {
    const response = await fetch(`http://hn.algolia.com/api/v1/items/${objId}`);
    const detailsData = await response.json();
    setDetails(detailsData);
    setdetailsLoadState("loaded");
    const date = new Date(detailsData.created_at);
    setCreationDate(date.toLocaleDateString("en-GB", dateFormat));
    return detailsData;
  }
  useEffect(() => {
    fetchDetails(props.objId);

  }, [props.objId, fetchDetails]);
  return (
    <>
      {(detailsLoadState === "loading") && <LoadingScreen />}
      {(detailsLoadState === "loaded") &&
        <div className="postdata-wrapper">
          <div className="postdata-header">
            <div className="postdata-title">{(details.title === "" || details.title === null) ? <div className="text-disabled text-italic">No title found</div> : details.title}</div>
            <div className="postdata-points">
              <FontAwesomeIcon icon={faChevronUp} />
              &nbsp;&nbsp;
              {details.points}</div>
          </div>
          <div className="postdata-author">
            by <div className="text-italic">{details.author}</div> &nbsp;&nbsp;&nbsp;
            <div className="text-color-cta date-text-size"> Created on {creationDate}</div>
          </div>
          <a href={details.url} target="_blank" rel="noreferrer">
            <div className="post-link">Go to article</div>
          </a>

          <div className="postdata-comments-header">
            {(details.children.length === 0) ? <div className="text-disabled text-italic">No comments yet </div> : details.children.length + " Comments"} </div>
          <div className="postdata-comments">
            {details.children.map(({ id, author, text, children }) => (
              <Comment key={id} {...{ author, text, children }} />
            ))}
          </div>
        </div>}
    </>

  )
}

export default PostData