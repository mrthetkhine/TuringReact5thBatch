import {useCallback, useDebugValue, useMemo, useState} from "react";
import * as React from 'react';
function Child({callback})
{
    console.log('Child render');
    return (<div>
        Child
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={callback}>
            Execute Callback
        </button>
    </div>);
}
let previousCallBack ;
let CachedChild = React.memo(Child);

function useCustomDebug()
{
    useDebugValue('My Custom Hook');
}
export default function CallBackDemo()
{
   useCustomDebug();
    const [state,setState] = useState('Hello')
    const parentCallback =useCallback(()=>{
        console.log('Parent Callback');
    },[]);
    console.log('callback check ', previousCallBack == parentCallback);
    previousCallBack = parentCallback;
    const changeStateHandler = ()=>{
      setState(new String('Something'));
      console.log('Change state');
    };
    console.log('CallBackDemo render');
    return (<div>
        Use Callback
        <CachedChild callback={parentCallback}>

        </CachedChild>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={changeStateHandler}>
            Change State
        </button>
    </div>);
}