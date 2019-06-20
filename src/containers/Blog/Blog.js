import React, { Component } from 'react';
import Posts from './Posts';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import Frag from '../../components/HOC/Frag';

export default class Blog extends Component {    
    
    render () {
        
        
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
                <Posts />
                {/* <section>
                    <FullPost 
                        // id={this.state.selectedPostId} 
                        // post={this.state.posts[this.state.selectedPostId-1]}
                        />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
};
