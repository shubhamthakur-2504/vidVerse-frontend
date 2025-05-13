import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: "userData",
    initialState:{
        isLoggedIn: false,
        userData: null
    },
    reducers:{
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = userDataSlice.actions
export default userDataSlice.reducer