import {forwardRef, useRef} from 'react';

const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});
export default function CustomInput()
{
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (<div>
        Custom Input
        <MyInput ref={inputRef} />
        <button onClick={handleClick}>
            Focus the input
        </button>
    </div>);
}