import {useAppSelector} from "../../app/hooks";
import {selectTodo, Todo} from "../todo/todoSlice";
import {MovieModel, selectMovie} from "./movieSlice";
import MovieUi from "./MovieUi";
import './Movie.css';

export default function MovieListUI()
{
    const movie = useAppSelector(selectMovie);
    return(<div>
        Movie List
        {
            movie.items.map((m:MovieModel)=>{
                return <MovieUi
                        key={m._id}
                        movie={m}/>
            })
        }
    </div>);
}