// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'FETCH_ALL':
//             return state;
//         case 'CREATE':
//             return state;
//         default:
//             return state;
//     }
// }


// our posts are gonna be an array []
// because we are not using it here so we need to export
export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}