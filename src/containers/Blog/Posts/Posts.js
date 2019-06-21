import React, { Component } from 'react';
import axios from 'axios';
import Frag from '../../../components/HOC/Frag';
import Post from '../Post';
import './Posts.css';
import FullPost from '../FullPost';

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
        this.setState({selectedPostId: id});
    }

    render() {
        const posts = this.state.error ? 
            <Frag>
                <p>Got a Network trouble here: {this.state.error.toString()}</p>
                <p>Error info: {JSON.stringify(this.state.error.response.config).toString()}</p>
            </Frag> : 
            this.state.posts.slice(0, 10).map(post => {
                return <Post 
                            key={post.id} 
                            title={post.title} 
                            author={post.body.slice(0, 10)}
                            clicked={() => this.postSelectedHandler(post.id)}/>
            });            
        
        return (
            <section className="Posts">
                {posts}
                <FullPost 
                    id={this.state.selectedPostId} 
                    post={this.state.posts[this.state.selectedPostId-1]} 
                />
            </section>
        )
    }
}
