import {Todo, todoSlice} from "../todo/todoSlice";
import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {apiGetAllMovie} from "./movieApi";
import {Root} from "react-dom/client";

export interface DirectorModel
{
    _id?:string;
    name?:string;
    phoneNo?:string;
}
export interface MovieModel
{
    _id?:string;
    title?:string;
    director?:DirectorModel;
    year?:number;
}
export interface MovieState
{
    items: Array<MovieModel>;
}
const initialState : MovieState = {
    items: [
        /*
        {
            "_id": "63d7cc2c1fe50102fe39ebb4",
            "title": "Titanic Update",
            "director": {
                "name": "Jame Cameron",
                "phoneNo": "09993",
                "_id": "63d7cc841fe50102fe39ebb8"
            },
            "year": 2000,

        },
        {
            "_id": "63d7cc841fe50102fe39ebb7",
            "title": "Avatar",
            "director": {
                "name": "JameCameron",
                "phoneNo": "09993",
                "_id": "63d7cc841fe50102fe39ebb8"
            },
            "year": 1995,

        },

         */
    ],
}
export const getAllMovie = createAsyncThunk(
    'movie/getAllMovie',
    async () => {
        console.log("API get all movie");
        const response = await apiGetAllMovie();

        console.log("All movie json ",response.data);
        return response.data;
    }
);
export const movieSlice = createSlice({
        name: 'movie',
        initialState,
        reducers:{

        },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovie.fulfilled, (state,action) => {
                state.items = action.payload;
            })


    },
});
export const selectMovie = (state: RootState) => state.movie;
export const selectMovieById = (state:RootState, movieId:string) =>
    createSelector(
        selectMovie,
        state => state.items.filter(movie => movie._id === movieId)
    );
export default movieSlice.reducer;