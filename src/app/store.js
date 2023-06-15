// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/CounterSlice';

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     }
// })
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})