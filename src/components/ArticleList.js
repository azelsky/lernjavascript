import React, {Component} from 'react';
import Article from './Article/index';
import accordion from '../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteArticle} from "../AC";

class ArticleList extends Component{
  static propTypes = {
    //from connect
    articles: PropTypes.array.isRequired,
    // from according
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  }

  render(){
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

export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters

    const filteredArticles = articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })

    return {
        articles: filteredArticles
    }
}, {deleteArticle})(accordion(ArticleList))