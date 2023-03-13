import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import TodoUi from "./features/todo/TodoUi";

function App() {
  return (
    <div className="App">

       {/* <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <Counter />*/}
   {/*     <HelloWorld/>*/}

        <TodoUi/>
    </div>
  );
}

export default App;
