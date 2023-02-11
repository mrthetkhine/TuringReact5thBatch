export function ParentEvent(props)
{
    console.log('Props ',props);
    let clickHandler = ()=>{
        console.log('Click handler ',props);
    };
    return (<div>
        <EventDemo onClick={clickHandler}/>
    </div>);
}
export default function EventDemo({onClick})
{
    return(<div>
        <button className={"btn btn-primary"}
                onClick={onClick}>
            Click me
        </button>
    </div>);
}