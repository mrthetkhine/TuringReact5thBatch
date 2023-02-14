import {useContext, useState} from 'react';
import {ContextData} from "./ContextData";

function Child2()
{
    console.log('Child2 render');
    const data = useContext(ContextData);
    return (<div>
        Child 2
        <h1>Data from context {data}</h1>
    </div>);
}
function Child1()
{
    console.log('Child1 render');
    return <div>
        Child 1
        <Child2>

        </Child2>
    </div>
}
export default function ContextDemo()
{
    console.log('Parent render');
    const [data,setData] = useState('<<Data from parent>>')
    const btnHandler = ()=>{
      setData("Change by button");
    };

    return (<div>
        <ContextData.Provider value={data}>
            Data from Context
            <Child1></Child1>
        </ContextData.Provider>
       {/* <Child1></Child1>*/}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnHandler}>Change</button>
    </div>)
}