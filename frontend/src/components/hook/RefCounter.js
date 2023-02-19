import {useRef, useState} from "react";

export default function RefCounter()
{
    const [state,setState] = useState();
    let count = useRef(0);
    const incCount = ()=>{
      count.current ++;
      console.log('Count is ',count.current);
    };
    console.log('Ref Counter render');
    const forceRender= ()=>{
        setState(count);
    };
    return (<div>
        <h1> Ref Counter</h1>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={incCount}>Inc</button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={forceRender}>Render</button>
    </div>);
}