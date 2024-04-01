import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({

    name: "gpt",
    initialState: {
         showGptSearch : false,
         movieNames: null,
         movieResults: null,
        
    },

    reducers: {
       
        toggleGptSearchView : (state,action) =>
        {
            state.showGptSearch = !state.showGptSearch;
        },
        
        addGptMovieResult: (state,action) =>
        {
            state.movieResults = action.payload;
           

        },

        addGptMovieNames: (state,action) =>
        {
            state.movieNames = action.payload;
        }

        
    }
})

export const {toggleGptSearchView,addGptMovieResult,addGptMovieNames} = gptSlice.actions;

export default gptSlice.reducer;