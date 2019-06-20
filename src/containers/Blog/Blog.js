import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Frag from '../../components/HOC/Frag';

export default class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                this.setState({posts: response.data});
                console.log('response', response);
            })
            .catch((error) => {                
                this.setState({error: error});
                console.log('error', error.response);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    
    render () {
        const posts = this.state.error ? 
                <Frag>
                    <p>Got a Network trouble here: {this.state.error.toString()}</p>
                    <p>Error info: {JSON.stringify(this.state.error.response.config).toString()}</p>
                </Frag> : 
                this.state.posts.slice(0, 6).map(post => {
                    return <Post 
                                key={post.id} 
                                title={post.title} 
                                author={post.body.slice(0, 10)}
                                clicked={() => this.postSelectedHandler(post.id)}/>
                });
        
        return (
            <div>
                <header className="Header">
                    <nav>
                        {/* <ul> */}
                            <a href="/">Home</a>
                            <a href="/new-post">New Post</a>
                        {/* </ul> */}
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                        id={this.state.selectedPostId} 
                        post={this.state.posts[this.state.selectedPostId-1]}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
};
