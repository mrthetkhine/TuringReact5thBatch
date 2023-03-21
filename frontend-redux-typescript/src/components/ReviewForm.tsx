import {Rating} from "react-simple-star-rating";
import React, {useState} from "react";
import {ReviewModel} from "../features/reviews/reviewSlice";

export default function ReviewForm(props:{
    saveCallBack:(review:ReviewModel)=>void,
})
{
    const {saveCallBack} = props;
    const [rating, setRating] = useState(0);
    const [review,setReview] = useState('');
    const handleRating = (rate: number) => {
        console.log('Set rating ',rate);
        setRating(rate);
    };
    const btnSaveHandler = ()=>{
        console.log('Rating ',rating, 'Review ',review);
        saveCallBack({
            rating,
            review
        });
    };
    return (<div>
       Rating: <Rating size={20}
                       onClick={handleRating}
                        initialValue={0} />
       <div>
          Review <input type={"text"}
                        value={review}
                        onChange={(event)=>setReview(event.target.value)}/>
       </div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnSaveHandler}>
            Save
        </button>
    </div>);
}