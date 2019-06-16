import React, { Component } from 'react';
import Frag from '../HOC/Frag';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    
    deleteHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then((response) => {
                console.log('response', response);
            });
    }
    
    render () {
        // console.log(this.props.post);
        const post = !this.props.id ? <p>Please select a Post!</p> :
            <Frag>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deleteHandler}>Delete</button>
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