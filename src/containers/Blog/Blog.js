import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

export default class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data});
                console.log('response', response);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    
    render () {
        const posts = this.state.posts.slice(0, 6).map(post => {
            return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.body.slice(0, 10)}
                        clicked={() => this.postSelectedHandler(post.id)}/>
        });
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} post={this.state.posts[this.state.selectedPostId-1]}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
};
