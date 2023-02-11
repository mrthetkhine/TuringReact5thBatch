import { useState } from 'react';
export default function Counter()
{
    let [count,setCount] = useState(0);
    let increment = ()=>{
        console.log('Inc ');
        setCount(count+1);

        //Never do this
        //count = count+1;
    };
    console.log('Count render');
    return (<div>
        Counter {count}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={increment}
            >
            +
        </button>
    </div>);
}