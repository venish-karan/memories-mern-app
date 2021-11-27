// inside of here we are going to create all the handlers for our routes.
// we are just declaring the req, res here so that the posts.js in routes will not be looking too shaby.

import PostMessage from '../models/postMessage.js';


export const getPosts = async (req, res) => {
    //res.send('THIS WORKS!');
    try {
        const postMessages = await PostMessage.find(); //find is going to take some time so we need to add await and async
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = (req, res) => {
    res.send('POST CREATION');
}