import LifeCycleDemo from "./LifeCycleDemo";
import {useState} from "react";

export default function LifeCycleWrapper()
{
    const [input,setInput] = useState();
    return (<div>
        <input type={"input"}
               value={input}
               onChange={(event)=>setInput(event.target.value)}
        />
        <LifeCycleDemo initial={input}/>
    </div>)
}