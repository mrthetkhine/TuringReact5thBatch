import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams,
    useNavigate,
} from "react-router-dom";

import { Rating } from 'react-simple-star-rating';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectTodo} from "../features/todo/todoSlice";
import {getAllReviewForMovie, ReviewModel, saveReview, selectReview} from "../features/reviews/reviewSlice";
import {useSelector} from "react-redux";
import {selectMovie, selectMovieById} from "../features/movies/movieSlice";
import {RootState} from "../app/store";
import MovieUi from "../features/movies/MovieUi";
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import ReviewForm from "../components/ReviewForm";

function ReviewUi(props:{review:ReviewModel})
{
    const {review} = props;
    return (<div >
        <Rating size={20}
                initialValue={review.rating} />
        {review.review}
    </div>)
}
export default function MovieDetailPage()
{
    let { movieId } = useParams();
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getAllReviewForMovie(movieId+''))
    },[]);

    const review = useAppSelector(selectReview);
    const movies = useAppSelector(selectMovie);
    const movie = selectMovieById(movies.items,movieId+'');
    console.log('Movie in movie detail page ',movie);
    console.log('Review ',review);

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const btnBackHandler = ()=>{
        navigate('/movie-list');
    };
    const saveCallBackHandler = (newReview:ReviewModel)=>{
        console.log('NewReview ',newReview);

        const reviewToSave = {
            ...newReview,
            movie: movieId
        };
        dispatch(saveReview(reviewToSave))
            .unwrap()
            .then(data=>{
                console.log('Data from async thunk ',data);
                handleClose();
            });
        //handleClose();
    };
    return (<div>
        Movie detail page {movieId}
        <MovieUi movie={movie}
                 showDetail={false}
            />
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <ReviewForm
                            saveCallBack={saveCallBackHandler}/>

            </Modal.Body>

        </Modal>
        <button className="btn btn-primary"
                onClick={handleShow}>
            New Review
        </button>
        {
            review.items.map((r:ReviewModel)=>
                                    <ReviewUi key={r._id}
                                              review={r}/>)
        }

        <div>
            <button className="btn btn-primary"
                    onClick={btnBackHandler}>
                Back
            </button>
        </div>
    </div>)
}