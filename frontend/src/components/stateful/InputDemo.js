import { useState } from 'react';
export default function InputDemo()
{
    const [name,setName]  = useState('');
    const [error,setError] = useState('');
    console.log('InputDemo Render');

    const isStartWithUpperCase=(str) => {
      let initial = str.charAt(0);
      return initial.toUpperCase() == initial;
    };
    const onClickHandler = ()=>{
      console.log('Name start with upper case ',isStartWithUpperCase(name));
      if(!isStartWithUpperCase(name))
      {
          setError('Name does not start with uppercase');
      }
      else
      {
          setError('');
      }
    };
    const onChangeHandler =(event)=>{
        setName(event.target.value);
        setError('');
    };

    return(<div>
        <input type={"text"}
               value={name}
               onChange={(event)=>onChangeHandler(event)}
               className={"form-input"}/>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onClickHandler}>Submit</button>
        <div>
            {
                error && <span className={"alert alert-danger"}>
                {
                    error?error:''
                }
                 </span>
            }

        </div>

    </div>);
}