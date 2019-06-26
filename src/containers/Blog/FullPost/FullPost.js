import React, { Component } from 'react';
import Frag from '../../../HOC/Frag';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null       
    }    

    deleteHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then((response) => {
                console.log('response', response);
            });
    }

    loadData() {        
        if (!this.state.post || this.state.post.id !== Number(this.props.match.params.id)) {            
            console.log('url :', this.props.match.url);
            axios.get('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log('response', response);
                this.setState({post: response.data})               
            })            
            .catch(error => {
                console.log('error', error);
                // this.setState({loading: false});
            });
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
        let post = <p>Please select a Post!</p>;
         
        if (this.props.match.params.id) {
            console.log('__Loading');
            post = <p>Loading</p>
        };
        if (this.state.post) {
            console.log('__Post!')
            post = (
            <Frag>
                <h1 style={{textTransform: 'capitalize'}}>{this.state.post.title} Post ID: {this.state.post.id}</h1>
                <p>{this.state.post.body.repeat(5)}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deleteHandler}>Delete</button>                    
                </div>
        </Frag>)};

        return (
            <div className="FullPost">
                {post}
            </div>

        )        
    }
}

export default FullPost;