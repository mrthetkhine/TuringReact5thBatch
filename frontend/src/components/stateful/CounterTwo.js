import { useState } from 'react';

export default function CounterTwo() {
    const [number, setNumber] = useState(0);
    console.log('Re render counter two');
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3</button>
        </>
    )
}