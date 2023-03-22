import {ReviewModel} from "./reviewSlice";
import {Rating} from "react-simple-star-rating";
import React from "react";
import './Review.css';
export default function ReviewUi(props:{
    review:ReviewModel,
    onEditClick:(review?:ReviewModel)=>void,
    onDeleteClick:(review?:ReviewModel)=>void,
})
{
    const {review} = props;
    return (<div className={"review"} >
        <Rating size={20}
                initialValue={review.rating} />
        {review.review}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>props.onEditClick(review)}>
            Edit
        </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>props.onDeleteClick(review)}>
            Delete
        </button>
    </div>)
}