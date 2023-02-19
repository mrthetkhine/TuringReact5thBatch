import {useRef} from "react";

export default function FocusDemo()
{
    const inputRef = useRef(null);
    const onClickHandler = ()=>{
      console.log('Focus ',inputRef.current);
      inputRef.current.focus();

      //bad usecase
      console.log("Input value ", inputRef.current.value);
      inputRef.current.value = 'Something change';
    };
    console.log('Render');
    return <div>
        <input type={"text"}
                ref={inputRef}/>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onClickHandler}>
            Focus
        </button>
    </div>
}