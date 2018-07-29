import React, {Component} from 'react';
import ArticleList from './ArticleList';
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

        return(
            <div>
                <Counter />
                <UserForm />
                <Filters />
                <ArticleList />
            </div>
        )
    }

}

export default App