import {MovieModel, movieSlice, MovieState} from "../movies/movieSlice";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface ReviewModel
{
    _id?:string;
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
export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
});
export const selectReview = (state: RootState) => state.review;
export default reviewSlice.reducer;