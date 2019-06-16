import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    
    
    
    render () {
        const post = !this.props.id ? <p>Please select a Post!</p> : (
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>);
        console.log(post);
        return (
            <div className="FullPost">
                {post}
            </div>

        )        
    }
}

export default FullPost;