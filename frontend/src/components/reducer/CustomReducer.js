import {useReducer, useState} from "react";
function useCustomReducer(reducer,initialState)
{
    const [state,setState] = useState(initialState);
    function dispatch(action)
    {
        let newState = reducer(state,action);
        setState(newState);
    }
    return [state,dispatch];
}
const initialState = {
    count: 0
};
function reducer(state,action)
{
    switch (action.type)
    {
        case 'INC_COUNTER':
            return{ count : state.count+1}
        case 'DEC_COUNTER':
            return {count : state.count-1}
        default :
            return new Error();
    }
}

export default function CustomReducer()
{
    const [state, dispatch] = useCustomReducer(reducer, initialState);

    const incHandler = ()=>{
        dispatch({
            type:'INC_COUNTER'
        });
    };
    const decHandler = ()=>{
        dispatch({
            type:'DEC_COUNTER'
        });
    }
    return (<div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={incHandler}>
            +
        </button>
        <h1>Custom Counter {state.count}</h1>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={decHandler}>
            -
        </button>
    </div>);
}