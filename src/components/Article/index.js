import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './style.css';

class Article extends PureComponent{
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,

    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps.isOpen !== this.props.isOpen
  // }

  state = {
    updateIndex: 0
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    //console.log('update article');
    return(
      <div ref = {this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick = {this.handleDelete}>delete me</button>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  handleDelete = () => {
    const {deleteArticle, article} = this.props
    deleteArticle(article.id);
  }

  setContainerRef = ref => {
    this.container = ref;
    //console.log('---', ref)
  }
  
  componentDidMount() {
    //console.log('---', 'mounted');
  }

  getBody(){
    const {article, isOpen} = this.props;
    if(isOpen){
      return  (
        <section>
          {article.text}
          <button onClick = {() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
          <CommentList article = {article} ref = {this.setCommentsRef} key={this.state.updateIndex}/>
        </section>
      )
    }
  }

  setCommentsRef = ref => {
    //console.log('---', ref)
  }


}

export default Article