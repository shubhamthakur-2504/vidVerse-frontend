import { createSlice } from "@reduxjs/toolkit";

const commentPostedSlice = createSlice({
    name: "commentPosted",
    initialState: {
        commentPosted: false
    },
    reducers: {
        setCommentPosted: (state, action) => {
            state.commentPosted = action.payload
        },
        toggleCommentPosted: (state) => {
            state.commentPosted = !state.commentPosted
        }
    }
})

export const { setCommentPosted, toggleCommentPosted } = commentPostedSlice.actions
export default commentPostedSlice.reducer