import { combineReducers } from 'redux';

import posts from './posts';

export default combineReducers({ posts });
// posts : posts, considering both the key and value pair are the same so keep key only