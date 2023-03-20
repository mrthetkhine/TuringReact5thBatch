import {MovieModel} from "./movieSlice";
import './Movie.css';
import {Link} from "react-router-dom";
import React from "react";
export default function MovieUi(props: { movie: MovieModel })
{
    let movie = props.movie;
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
                <div>
                    <Link className="nav-link btn btn-outline-dark"
                          to={"/movie-details/"+movie._id}>
                    Details
                    </Link>
                </div>
            </>

        }
    </div>);
}