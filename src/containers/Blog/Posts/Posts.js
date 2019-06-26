import React, { Component } from 'react';
import axios from 'axios';
import Frag from '../../../HOC/Frag';
import Post from '../Post';
import FullPost from '../FullPost';
import { Link, Route } from 'react-router-dom';
import './Posts.css';

export default class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: null
    }
    
    componentDidMount() {
        console.log('Posts have been mounted');
        // console.log(this.props);
        axios.get('/posts')
            .then(response => {
                this.setState({posts: response.data});
                // console.log('response', response);
            })
            .catch((error) => {                
                // this.setState({error: error});
                console.log('error', error.response);
            });
    }

    componentWillUnmount() {
        console.log('Posts will unmount!');
    }
    
    postSelectedHandler = (id) => {
        // this.props.history.push({pathname: '/' + id})
        this.props.history.push('/posts/' + id);
        // this.setState({selectedPostId: id});
    }

    render() {
        const posts = this.state.error ? 
            <Frag>
                <p>Got a Network trouble here: {this.state.error.toString()}</p>
                <p>Error info: {JSON.stringify(this.state.error.response.config).toString()}</p>
            </Frag> : 
            this.state.posts.slice(0, 10).map(post => {
                return (
                // <Link to={'/posts/' + post.id}>                     
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.body.slice(0, 10)}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                // </Link>
                )
            });            
        
        return (
            <section className="Posts">
                {posts}  
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>                 
            </section>
        )
    }
}
