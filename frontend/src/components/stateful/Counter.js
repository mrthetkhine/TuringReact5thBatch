import { useState } from 'react';
export default function Counter()
{
    let [count,setCount] = useState(0);
    let [positive,setPositive] = useState(true);
    let increment = ()=>{
        console.log('Inc ');
        if(positive)
        {
            setCount(count+1);
        }
        else
        {
            setCount(count-1);
        }

        //Never do this
        //count = count+1;
    };
    let toggle = ()=>{
        setPositive(!positive);
        //increment();
    }
    console.log('Count render');
    return (<div>
        Counter {count}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={increment}
            >
            +
        </button>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={toggle}
        >
            Toggle
        </button>
    </div>);
}