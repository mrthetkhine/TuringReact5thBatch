function toUpper(str)
{
    return str.toUpperCase();
}
function Sample({data})
{
    console.log('Data ',data);
    return (<div style={{
        backgroundColor:'gray'
    }}>
        Sample {toUpper(data.title)}
    </div>);
}
function AnotherSample({title,message})
{
    return(<div>
        <div>Title =>{title}</div>

        Message =>{message}
    </div>);
}
export default function JsxProperty()
{
    let avatar = {
        title : "Something",
        message : 'Message'
    };
    return(<div>
        Demo
        <Sample data={{
            title : "Something"
        }}/>
        <AnotherSample {...avatar}/>
    </div>);
}