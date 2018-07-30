import React, {Component} from 'react';
import Article from './Article/index';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteArticle} from "../AC";
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Component{
  static propTypes = {
    //from connect
    articles: PropTypes.array.isRequired,
    // from according
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  }

  render(){
    console.log('i\'m reload')
    const {articles, toggleOpenItem, openItemId} = this.props
    const articleElements = articles.map(
        (article) => <li key = {article.id}>
          <Article
            article = {article}
            isOpen = {article.id === openItemId}
            toggleOpen = {toggleOpenItem(article.id)}
            deleteArticle = {this.props.deleteArticle}
          />
        </li>
    )

  return(
    <ul>
      {articleElements}
    </ul>
    )
  }


}

export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state)
    }
}, {deleteArticle})(accordion(ArticleList))