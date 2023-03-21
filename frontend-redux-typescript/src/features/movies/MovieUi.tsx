import {MovieModel} from "./movieSlice";
import './Movie.css';
import {Link, useNavigate} from "react-router-dom";
import React from "react";
export default function MovieUi(props: {
    movie: MovieModel
    ,showDetail:boolean
})
{
    const navigate =useNavigate();
    let movie = props.movie;
    const btnDetailHandler =()=>{
        navigate("/movie-details/"+movie._id);
    };
    return (<div className={'movie'}>
        {
            <>
                <div className={'movie-title'}>
                    {movie.title}
                </div>
                <div>
                    {movie.year}
                </div>
                <div>
                    Directed by {movie.director?.name}
                </div>
                {
                    props.showDetail &&
                    <div>
                        <button className="btn btn-primary"
                                onClick={btnDetailHandler}>
                            Details
                        </button>

                    </div>
                }
            </>

        }
    </div>);
}