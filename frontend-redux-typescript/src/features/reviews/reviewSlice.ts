import {getAllMovie, MovieModel, movieSlice, MovieState} from "../movies/movieSlice";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {apiGetAllMovie} from "../movies/movieApi";
import {apiGetAllReviewForMovie, apiSaveReview} from "./reviewApi";
import {Todo} from "../todo/todoSlice";

export interface ReviewModel
{
    _id?:string;
    movie?:string;
    rating?:number;
    review?:string;
}
export interface ReviewState
{
    items: Array<ReviewModel>;
}
const initialState : ReviewState = {
    items:[
        {
            "_id": "63d7d49b1fe50102fe39ebd7",
            "rating": 5,
            "review": "Good",

        },
        {
            "_id": "63d7d4ce10917983b49924cf",
            "rating": 5,
            "review": "Really good",

        },
    ]
};
export const getAllReviewForMovie = createAsyncThunk(
    'review/getAllReviewForMovie',
    async (movieId:string) => {
        console.log("API get all review for movie");
        const response = await apiGetAllReviewForMovie(movieId);

        console.log("All review json ",response.data);
        return response.data;
    }
);
export const saveReview = createAsyncThunk(
    'review/saveReview',
    async (review:ReviewModel) => {

        const response = await apiSaveReview(review);
        console.log("Save review json ",response.data);
        return response.data;
    }
);
export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        resetReview:(state)=> {
            state.items = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllReviewForMovie.fulfilled, (state,action) => {
                console.log('GetAllReview fullfilled');
                state.items = action.payload;
            })
            .addCase(saveReview.fulfilled, (state,action) => {
                console.log('saveReview fullfilled');
                state.items = [...state.items,action.payload];
            })


    },
});
export const selectReview = (state: RootState) => state.review;

export default reviewSlice.reducer;