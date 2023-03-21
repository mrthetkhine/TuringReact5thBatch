import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import TodoUi from "./features/todo/TodoUi";
import MovieListUI from "./features/movies/MovieListUI";
import HomePage from "./page/HomePage";
import MoviePage from "./page/MoviePage";
import MovieDetailPage from "./page/MovieDetailPage";
import {useAppDispatch} from "./app/hooks";
import {getAllMovie} from "./features/movies/movieSlice";
function App() {

  return (
    <div className="App">
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/movie-list">Movie list</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>

                <Route path="/" element={<HomePage/>}>
                </Route>

                <Route path="/movie-list" element= {<MoviePage></MoviePage>}>
                </Route>
                <Route
                    path="/movie-details/:movieId"
                    element={<MovieDetailPage></MovieDetailPage>}>

                </Route>

            </Routes>
        </Router>
       {/* <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <Counter />*/}
   {/*     <HelloWorld/>*/}

      {/*  <TodoUi/>*/}
      {/*  <MovieListUI/>*/}
    </div>
  );
}

export default App;
