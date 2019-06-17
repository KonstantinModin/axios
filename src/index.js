import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.interceptors.request.use(request => {
    console.log('Intesepter request catched', request);
    return request;
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
