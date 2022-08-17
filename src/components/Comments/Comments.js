import React from 'react'
import Comment from './Comment'
import "./Comments.css";


const Comments = (props) => {
    return (
        <div className="comment-indent">
            {props.children.map(({ id, author, text, children }) => (
                <Comment key={id} {...{ author, text, children }} />
            ))}
        </div>
    )
}

export default Comments