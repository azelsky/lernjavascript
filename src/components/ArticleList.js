import React from 'react';
import Article from './Article'

export default function ArticleList({articles}){
    const articleElements = articles.map(
        (article) => <li key = {article.id}><Article article = {article}></Article> </li>
    )

    return(
        <ul>
           {articleElements}
        </ul>
    )
}