import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import ClassComponent from "./components/ClassComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import ListDemo from "./components/ListDemo";
import PageComponent from "./components/PageComponent";
import {Body} from './components/PageComponent';
import Table from "./components/Table";
import JsxProperty from "./components/JsxProperty";
import GrayBorder from "./components/GrayBorder";
function App() {
  return (
    <div className="App">
      Hello from Main React

      {/*  <HelloWorld/>*/}
       {/* <HelloWorld/>*/}
       {/* <ClassComponent/>*/}
       {/* <ConditionalRendering/>*/}
        {/*<ListDemo/>*/}
      {/*  <PageComponent/>*/}
        {/*<Table/>*/}
      {/*  <JsxProperty/>*/}

        <GrayBorder>
            <h1>Hello</h1>
            <JsxProperty/>
        </GrayBorder>
    </div>
  );
}

export default App;
