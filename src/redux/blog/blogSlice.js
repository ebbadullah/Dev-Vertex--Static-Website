import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    categories: ["Technology", "Business", "Design", "Development"],
}

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        fetchPostsStart: (state) => {
            state.loading = true
        },
        fetchPostsSuccess: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        fetchPostsFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
    },
})

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure, setCurrentPost } = blogSlice.actions
export default blogSlice.reducer
