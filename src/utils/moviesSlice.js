import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null
    },

    reducers: {
        addNowPlayingmovies : (state,action) =>
        {
            state.nowPlayingMovies = action.payload;
        }
    }
})

export const {addNowPlayingmovies} = moviesSlice.actions;

export default moviesSlice.reducer;