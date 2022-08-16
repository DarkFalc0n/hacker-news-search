import React from 'react'

import "./PostData.css";

const PostData = (props) => {
  return (
        <div className="postdata-wrapper">
          <div className="postdata-title">This is a title</div>
          <div className="postdata-author">AuthorName</div>
          <div className="postdata-points">points</div>
          <div className="postdata-comments">comment1</div>
        </div>
  )
}

export default PostData