import {useMemo, useState} from "react";

function factorial(n)
{
    console.log('Factorial executed for ',n);
    let result =1;
    for(let i=1;i<=n;i++)
    {
        result *= i;
    }
    return result;
}
export default function MemoDemo()
{
    const [factInput,setFactInput] = useState('');
    const fact = useMemo(()=>factorial(factInput),[factInput]);
    const btnHandler = ()=>{
      console.log('Handler');
      setFactInput(5);
    };
    console.log('Re render ');

    return (<div>
        Use Memo
        <input type={"text"}
               value={factInput}
               onChange={(event)=>setFactInput(event.target.value)}
        />
        Result {fact}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnHandler}
            >Compute</button>
    </div>)
}