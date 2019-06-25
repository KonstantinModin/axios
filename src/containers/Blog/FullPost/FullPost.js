import React, { Component } from 'react';
import Frag from '../../../components/HOC/Frag';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }    

    deleteHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then((response) => {
                console.log('response', response);
            });
    }

    loadData() {
        if (this.state.post) console.log('this.state.post.id', this.state.post.id);
        if (!this.state.post || this.state.post.id != this.props.match.params.id) {
            console.log('this.props.match.params.id', this.props.match.params.id);
            console.log('url :', this.props.match.url);
            axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    console.log('response', response);
                    this.setState({post: response.data})
                })
                .catch(error => console.log('error', error));
        }   

    }

    componentDidMount() {
        console.log('FullPost did mount!');
        this.loadData();            
    }

    componentDidUpdate() {
        this.loadData();
    }

    componentWillUnmount(){
        console.log('FullPost will unmount!');
    }
    
    render () {
        
        const post = !this.state.post ? <p>Please select a Post!</p> :
            <Frag>
                <h1 style={{textTransform: 'capitalize'}}>{this.state.post.title} Post ID: {this.state.post.id}</h1>
                <p>{this.state.post.body}</p>
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