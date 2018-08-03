import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm'

class CommentList extends Component{
    static defaultProps = {
        comments: []
    }
    static propTypes = {
        comments: PropTypes.array,
        // from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render(){
        const text = this.props.isOpen ? 'Hide Comments' : 'Show Comments';
        return(
            <div>
                <button onClick = {this.props.toggleOpen}>
                    {text}
                </button>
               {this.getBody()}
            </div>
        )
    }
    getBody(){
        const {article: {comments = [], id}, isOpen} = this.props;
        if(isOpen === false) return null

        if(!comments.length){
            return( 
                <div>
                    <b>no comments yet</b>
                    <CommentForm articleId = {id} />
                </div>
            )
        }
        return (
            <div>
                <ul>
                    {comments.map((id) => <li key = {id}><Comment id={ id }/></li>)}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

export default toggleOpen(CommentList);