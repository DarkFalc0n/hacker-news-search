import React from 'react'
import Comments from './Comments';
import "./Comments.css";

const Comment = (props) => {
    const parseIntoJSX = (data) => {
        return { __html: data }
    }
    return (
        <div className="comment-wrapper">
            <div className="comment-author">{props.author}</div>
            <div dangerouslySetInnerHTML={parseIntoJSX(props.text)} className="comment-text"></div>
            <Comments children={props.children} />
        </div >
    )
}

export default Comment