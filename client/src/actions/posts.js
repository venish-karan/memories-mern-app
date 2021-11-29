import * as api from '../api';

// Action Creators
// as we are working with async data we need time to fetch data
// so we need to use redux thunk (async (dispatch))
export const getPosts = () => async (dispatch) => {
    try {
        // {data} is response, in the response we already have the data object
        // data represents the post
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
    // payload contains data (store our posts)
    //const action = { type: 'FETCH_ALL', payload: [] };

   // dispatch(action);
}