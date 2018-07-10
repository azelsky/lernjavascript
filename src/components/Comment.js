import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({comment}){    
    return(
            <div>{comment.text} <b>by {comment.user}</b></div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
    }).isRequired
}

