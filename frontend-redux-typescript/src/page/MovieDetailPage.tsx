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
import {
    deleteReview,
    getAllReviewForMovie,
    ReviewModel,
    saveReview,
    selectReview,
    updateReview
} from "../features/reviews/reviewSlice";
import {useSelector} from "react-redux";
import {selectMovie, selectMovieById} from "../features/movies/movieSlice";
import {RootState} from "../app/store";
import MovieUi from "../features/movies/MovieUi";
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import ReviewForm from "../components/ReviewForm";
import ReviewUi from "../features/reviews/ReviewUi";


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
    const [editReview,setEditReview] = useState({});

    const btnBackHandler = ()=>{
        navigate('/movie-list');
    };
    const saveCallBackHandler = (newReview:ReviewModel)=>{
        console.log('NewReview ',newReview);

        const reviewToSave = {
            ...newReview,
            movie: movieId
        };
        console.log('Review To Save ',reviewToSave);
        let saveOrUpdateApi;
        if(reviewToSave._id)
        {
            console.log('Update Review ',reviewToSave);
            saveOrUpdateApi  = updateReview;
        }
        else
        {
            saveOrUpdateApi = saveReview;
        }
        dispatch(saveOrUpdateApi(reviewToSave))
            .unwrap()
            .then(data=>{
                console.log('Data from async thunk ',data);
                handleClose();
            });
        //handleClose();
    };
    const newReviewHandler =()=>{
      setEditReview({});
      handleShow();
    };
    const editCallBackHandler = (review?:ReviewModel)=>{
      console.log('Edit review ',review);
      if(review)
      {
          setEditReview(review);
          handleShow();
      }

    };
    const deleteCallBackHandler =  (review?:ReviewModel)=>{

        if(window.confirm('Are you sure, you want to delete') && review)
        {
            console.log('Delete review ',review);
            dispatch(deleteReview(review));
        }
    };
    return (<div>
        Movie detail page {movieId}
        <MovieUi movie={movie}
                 showDetail={false}
            />
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{(editReview as any)._id?'Edit Review':'New Review'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <ReviewForm
                            review={editReview}
                            saveCallBack={saveCallBackHandler}/>

            </Modal.Body>

        </Modal>
        <button className="btn btn-primary"
                onClick={newReviewHandler}>
            New Review
        </button>

        {
            review.items.map((r:ReviewModel)=>
                                    <ReviewUi key={r._id}
                                              review={r}
                                              onEditClick={editCallBackHandler}
                                              onDeleteClick={deleteCallBackHandler}  />)
        }

        <div>
            <button className="btn btn-primary"
                    onClick={btnBackHandler}>
                Back
            </button>
        </div>
    </div>)
}