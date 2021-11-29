import React from 'react';
import Post from './Post/Post';

// we have to fetch the data from global redux store
import { useSelector } from 'react-redux';

import useStyles from './styles';

const Posts = () => {
    // we again initialize it as a hook
    // state.posts from reducers combineReducer
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
        <>
        <h1>POSTS</h1>
        <Post/>
        <Post/>
        </>
    );
}

export default Posts;