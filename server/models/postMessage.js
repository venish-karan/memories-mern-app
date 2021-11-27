// inside here we are going to utilize the posibility of mongoose

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({ // function with (object or {}) in there
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
     
});

// now we have to turn it into a model

const PostMessage = mongoose.model('PostMessage', postSchema);

// then on the PostMessage model we can able to do CRUD operations
export default PostMessage;