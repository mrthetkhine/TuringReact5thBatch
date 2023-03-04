import  './MouseTracker.css';
import {useState} from "react";
export function Cat({mouse})
{
    return (<div>
        <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
             style={{ position: 'absolute', left: mouse.x, top: mouse.y,width:20,height:20 }} />
    </div>);
}
export default function MouseTracker({render})
{
    const [position,setPosition] = useState({
        x:0,
        y:0
    });
    const handleMouseMove =(event)=> {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    }

    return <div
        className={'mouse-tracker'}
        style={{ height: '100vh' }}
        onMouseMove={handleMouseMove}>
        Mouse Tracker
        {/*<p>The current mouse position is ({position.x}, {position.y})</p>*/}
        {/*<Cat mouse={position}/>*/}
        {
            render(position)
        }
    </div>
}