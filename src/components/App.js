import React, {Component} from 'react';
import ArticleList from './ArticleList';
import ArticlesChart from './ArticlesChart';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';
import 'react-select/dist/react-select.css';

class App extends Component {
    static propTypes = {

    }

    state = {
        selection: null
    }

    render(){
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return(
            <div>
                <Counter />
                <UserForm />
                <Filters articles = {articles} />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles}/>
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})
}

export default App