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

import RenderWithCondition from "./components/RenderWithCondition";
import EventDemo, {ParentEvent} from "./components/interaction/EventDemo";
import ToDoListEventDemo from "./components/interaction/ToDoListEventDemo";
import Counter from "./components/stateful/Counter";
import CounterAlert from "./components/stateful/CounterAlert";
import CounterTwo from "./components/stateful/CounterTwo";
import ReRenderIssue from "./components/stateful/ReRenderIssue";
import ToDoCloneIssue from "./components/stateful/ToDoCloneIssue";
import InputDemo from "./components/stateful/InputDemo";
import Tab from "./components/Tab";
import DeclarativeUI from "./components/DeclarativeUI";

function App() {
    const header = ['Tab1','Tab2','Tab3'];
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

      {/*  <GrayBorder>
            <h1>Hello</h1>
            <JsxProperty/>
        </GrayBorder>*/}
        {/*<RenderWithCondition flag={true}/>*/}
       {/* <ParentEvent/>*/}
       {/* <ToDoListEventDemo/>*/}
      {/*  <Counter/>
        <Counter/>*/}
     {/* <CounterAlert/>*/}
      {/*<CounterTwo/>*/}
     {/* <ReRenderIssue/>*/}
     {/* <ToDoCloneIssue/>*/}
     {/*   <InputDemo/>*/}
     {/*<Tab headers={header}>
        <div>
            Child 1
        </div>
        <h1> Child 2</h1>
         <InputDemo/>
     </Tab>*/}
        <DeclarativeUI/>
    </div>
  );
}

export default App;
