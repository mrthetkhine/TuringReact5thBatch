import {useState} from "react";

export default function ReRenderIssue()
{
    const [items, setItems] = useState([]);
    console.log('Re render counter two');
    return (
        <>
            <h1>{items.length}</h1>
            <button onClick={() => {
                //items.push(100);
                setItems([...items,100]);

            }}>+1</button>
        </>
    )
}