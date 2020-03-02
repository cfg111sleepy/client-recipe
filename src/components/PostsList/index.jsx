import React from 'react';
import PostItem from '../Post';


const PostsList = ({ items, onRemove, onAdd }) => {
    return (
        <div className="post-items">
            {items ? items.map(post => <PostItem {...post} onRemove={onRemove} />) : 'Loading...'}
        </div>
    );
};
export default PostsList;