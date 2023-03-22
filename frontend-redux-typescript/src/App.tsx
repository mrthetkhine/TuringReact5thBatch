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
import ToDoPage from "./page/ToDoPage";
import {useAuthentication} from "./services/authService";
import LoginPage from "./page/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import LogoutPage from "./page/LogoutPage";
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
                        {
                            !useAuthentication() &&<li className="nav-item active">
                                <Link className="nav-link" to="/login?redirectTo=/">Login</Link>
                            </li>
                        }
                        <li className="nav-item active">
                            <Link className="nav-link" to="/movie-list">Movie list</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/todo">Todo</Link>
                        </li>
                        {useAuthentication() && <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>}
                    </ul>
                </div>
            </nav>
            <Routes>

                <Route path="/" element={<HomePage/>}>
                </Route>

                <Route path="/movie-list" element={
                    <PrivateRoute
                        redirectTo={"/login?redirectTo=/movie-list"}
                        isAuth={useAuthentication()}>
                        <MoviePage />
                    </PrivateRoute>
                }>

                </Route>

                <Route
                    path="/movie-details/:movieId"
                    element={
                        <PrivateRoute
                            redirectTo={"/login?redirectTo=/movie-detail/:movieId"}
                            isAuth={useAuthentication()}>
                            <MovieDetailPage />
                        </PrivateRoute>
                    }
                />

               {/* <Route path="/movie-list" element= {<MoviePage></MoviePage>}>
                </Route>
                <Route
                    path="/movie-details/:movieId"
                    element={<MovieDetailPage></MovieDetailPage>}>

                </Route>*/}
                <Route
                    path="/todo"
                    element={<ToDoPage></ToDoPage>}>

                </Route>
                <Route path="/login" element={<LoginPage/>}>

                </Route>
                <Route path="/logout" element={<LogoutPage/>}>

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
