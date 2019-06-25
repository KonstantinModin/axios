import React, { Component } from 'react';
import Posts from './Posts';
import NewPost from './NewPost';
import StartPage from './StartPage';
// import FullPost from './FullPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './Blog.css';

export default class Blog extends Component { 
    state = {
        inputText: '',
        auth: false
    } 
    
    inputHandler = ({target: {value}}) => { 
        console.log('value :', value);      
        this.setState({inputText: value});
    }
    
    render () {         

        return (
            <div>
                <Router>
                    <header className="Header">
                        <nav>                            
                            <NavLink to="/" exact>Home</NavLink>
                            <NavLink to="/posts">Posts</NavLink>                           
                            <NavLink to={{
                                pathname: '/newpost',
                                hash: '#submit',
                                search: '&quick-submit=true'
                            }}>New Post</NavLink>                            
                        </nav>
                        <input 
                            type="text" 
                            value={this.state.inputText}
                            onChange={this.inputHandler}
                        />
                        <span>this.state.inputText: <strong>{this.state.inputText}</strong></span>
                    </header>
                    <Switch>
                        <Route path="/" exact component={StartPage} />
                        <Route path="/posts" component={Posts} />
                        {this.state.auth && <Route path="/newpost" exact component={NewPost} />}
                        {/* <Redirect to="/" /> */}
                        <Route render={() => <h1>Page not found</h1>} />
                    </Switch>
                </Router>
            </div>
        );
    }
};
