// here we are gonna add all the routes that has to do something with posts

import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('THIS WORKS!');
// });

router.get('/', getPosts);
router.post('/', createPost);

export default router;