import React, { Component, Suspense } from 'react';
// import Posts from ;
// import NewPost from './NewPost';
import StartPage from './StartPage';
// import FullPost from './FullPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './Blog.css';

import asyncComponent from '../../components/HOC/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost');
});

const Posts = React.lazy(() => import('./Posts'));

export default class Blog extends Component { 
    state = {
        inputText: '',
        auth: true
    } 
    
    inputHandler = ({target: {value}}) => { 
        console.log('value :', value);      
        this.setState({inputText: value});
    }
    
    render () {         

        return (
            <div>
                {/* <Router basename="/my-app"> */}
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
                        <Route path="/posts" render={(props) => (
                            <Suspense fallback={<h1>Loading...</h1>} >
                                <Posts {...props} />
                            </Suspense>
                        )} />
                        {this.state.auth && <Route path="/newpost" component={AsyncNewPost} />}
                        {/* <Redirect to="/" /> */}
                        <Route render={() => <h1>Page not found!</h1>} />
                    </Switch>
                </Router>
            </div>
        );
    }
};
