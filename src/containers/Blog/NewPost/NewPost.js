import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './NewPost.css';

const NewPost = (props) => {
    const [state, setState] = useState({
        title: '',
        content: '',
        author: 'Konst'
    });

    useEffect(() => {
        console.log('New Post has been mounted');
        // console.log('props NewPost', props);
        return () => console.log('New Post will unmount!');
    }, []);

    const postDataHandler = () => {
        const data = {
            title: state.title,
            body: state.content,
            author: state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
            });
    }
    useEffect(() => {
        // console.log('state', state);
    })

    
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input 
                    type="text" 
                    value={state.title} 
                    onChange={({target: {value}}) => setState(prevState => {
                        return {...prevState, title: value}
                    })} 
                />
                <label>Content</label>
                <textarea 
                    rows="4" 
                    value={state.content} 
                    onChange={({target: {value}}) => setState(prevState => {
                        return {...prevState, content: value}
                    })} />
                <label>Author</label>
                <select 
                    value={state.author} 
                    onChange={({target: {value}}) => setState(prevState => {
                        return {...prevState, author: value}
                    })}>
                    <option value="Konst">Konst</option>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={postDataHandler}>Add Post</button>
            </div>
        );
    
}

export default NewPost;