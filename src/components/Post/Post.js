import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        <h1>My Title</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;