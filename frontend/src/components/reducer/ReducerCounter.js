import {useReducer} from "react";

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
export default function ReducerCounter()
{
    const [state, dispatch] = useReducer(reducer, initialState);

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
            <h1>Counter {state.count}</h1>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={decHandler}>
            -
        </button>
    </div>);
}