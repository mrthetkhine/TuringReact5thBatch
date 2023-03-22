import {Rating} from "react-simple-star-rating";
import React, {useState} from "react";
import {ReviewModel} from "../features/reviews/reviewSlice";

export default function ReviewForm(props:{
    saveCallBack:(review:ReviewModel)=>void,
    review?:ReviewModel,
})
{
    const {saveCallBack,review} = props;
    console.log('Review ',review);
    const [rating, setRating] = useState(review?.rating);
    const [reviewText,setReviewText] = useState(review?.review);
    const handleRating = (rate: number) => {
        console.log('Set rating ',rate);
        setRating(rate);
    };
    const btnSaveHandler = ()=>{
        console.log('Rating ',rating, 'Review ',reviewText);
        saveCallBack({
            ...review,
            rating,
            review: reviewText
        });
    };
    return (<div>
       Rating: <Rating size={20}
                       onClick={handleRating}
                       initialValue={rating} />
       <div>
          Review <input type={"text"}
                        value={reviewText}
                        onChange={(event)=>setReviewText(event.target.value)}/>
       </div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnSaveHandler}>
            Save
        </button>
    </div>);
}