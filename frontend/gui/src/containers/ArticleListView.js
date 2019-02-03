import React, {Component} from 'react';
import axios from 'axios';
import Articles from '../components/Article';
import CustomForm from '../components/Form';


class ArticleList extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
    }

    render () {
        return (
            <div>
                <Articles data={this.state.articles} />
                <br />
                <h2>Create an article</h2>
                <CustomForm />
            </div>
        );
    }
}

export default ArticleList;