import {flushSync} from "react-dom";
import {useRef, useState} from "react";

export default function FlushSync()
{
    const [count, setCount] = useState(0);
    const ref = useRef();
    function handleClick() {

        //setCount(count+1);
       flushSync(()=>{
            setCount(count+1);
       });
        console.log('Count after flush sync ',ref.current.value);
    }

    console.log('Render');
    return (<div>
        <button onClick={handleClick}>Set Count</button>
        <input ref={ref} value={count}/>

    </div>);
}