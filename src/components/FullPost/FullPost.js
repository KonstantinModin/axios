import React, { Component } from 'react';
import Frag from '../HOC/Frag';

import './FullPost.css';

class FullPost extends Component {
    
    
    
    render () {
        const post = !this.props.id ? <p>Please select a Post!</p> :
            <Frag>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </Frag>;
       
        return (
            <div className="FullPost">
                {post}
            </div>

        )        
    }
}

export default FullPost;