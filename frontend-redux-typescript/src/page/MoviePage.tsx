import MovieListUI from "../features/movies/MovieListUI";
import {useAppDispatch} from "../app/hooks";
import {useEffect} from "react";
import {getAllMovie} from "../features/movies/movieSlice";

export default function MoviePage()
{
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getAllMovie());
    },[]);
    return (<div>
        <MovieListUI/>
    </div>);
}