import {useState, useRef} from 'react';
export default function RefCounterProblem()
{
    const [show, setShow] = useState(true);
    const ref = useRef(null);
    return (<div>
        <button
            className={"btn btn-primary"}
            onClick={() => {
                setShow(!show);
            }}>
            Toggle with setState
        </button>
        <button
            className={"btn btn-primary"}
            onClick={() => {
                ref.current.remove();
            }}>
            Remove from the DOM
        </button>
        {show && <p ref={ref}>Hello world</p>}
    </div>);
}