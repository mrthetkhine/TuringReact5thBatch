import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams
} from "react-router-dom";
import {useAppSelector} from "../app/hooks";
import {selectTodo} from "../features/todo/todoSlice";
import {ReviewModel, selectReview} from "../features/reviews/reviewSlice";
import {useSelector} from "react-redux";
import {selectMovieById} from "../features/movies/movieSlice";
import {RootState} from "../app/store";
export default function MovieDetailPage()
{
    let { movieId } = useParams();
    const review = useAppSelector(selectReview);
    //const movie = useSelector((state:RootState) => selectMovieById(state, movieId+''));
    //console.log('Movie in movie detail page ',movie(movieId+''));
    return (<div>
        Movie detail page {movieId}

        {
            review.items.map((r:ReviewModel)=>{
                return (<div key={r._id}>
                    {r.review}
                </div>)

            })
        }
    </div>)
}