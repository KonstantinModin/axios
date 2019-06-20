import React from 'react';

import './Post.css';

const Post = ({ title, author: a, clicked }) => (
    
    <article className="Post" onClick={clicked}>
        <h1 style={{textTransform: 'capitalize'}}>{title.slice(0, 30)}</h1>
        <div className="Info">
            <div 
                className="Author">{`${a[0].toUpperCase()}.${a[1].toUpperCase()}. ${a.slice(2)}`}
            </div>
        </div>
    </article>
);

export default Post;