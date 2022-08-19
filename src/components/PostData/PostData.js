import { React, useEffect, useState, useCallback } from 'react';
import LoadingScreen from '../LoadingScreen.js/LoadingScreen';
import { faChevronUp, faChevronDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from "../Comments/Comment"

import "./PostData.css";

const PostData = (props) => {

  const [details, setDetails] = useState("");
  const [creationDate, setCreationDate] = useState(null);
  const [detailsLoadState, setdetailsLoadState] = useState("loading");
  const [isCommentsExpanded, setCōmmentsExpanded] = useState(false);

  const fetchDetails = useCallback(async (objId) => {
    const response = await fetch(`https://hn.algolia.com/api/v1/items/${objId}`).catch((err) => {
      console.log(err);
    })
    const detailsData = await response.json();
    setDetails(detailsData);
    setdetailsLoadState("loaded");
    const date = new Date(detailsData.created_at);
    setCreationDate(date.toLocaleDateString("en-GB", { year: 'numeric', month: 'short', day: 'numeric' }));
    return detailsData;
  }, []);

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
              <FontAwesomeIcon icon={faArrowUp} />
              &nbsp;&nbsp;
              {details.points}</div>
          </div>
          <div className="postdata-author">
            by <div className="text-italic">{details.author}</div> &nbsp;&nbsp;&nbsp;
            <div className="text-color-cta date-text-size"> Created on {creationDate}</div>
          </div>

          <div className="post-link">
            <a href={details.url} target="_blank" rel="noreferrer" id="article-link">
              Go to article
            </a>
          </div>

          <div
            className="postdata-comments-header"
          >
            {
              (details.children.length === 0) ?
                <div className="text-disabled text-italic">No comments yet </div> :
                <div onClick={
                  () => { setCōmmentsExpanded(isCommentsExpanded !== true) }}>{details.children.length} Comments &nbsp;&nbsp;
                  {(isCommentsExpanded) ?
                    <FontAwesomeIcon icon={faChevronUp} /> :
                    <FontAwesomeIcon icon={faChevronDown} />
                  }
                </div>
            }
            {(isCommentsExpanded) &&
              <div className="postdata-comments">
                {details.children.map(({ id, author, text, children }) => (
                  <Comment key={id} {...{ author, text, children }} />
                ))}
              </div>}
          </div>
        </div>}

    </>)
}

export default PostData