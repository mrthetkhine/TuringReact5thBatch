import React from 'react';
class ChildOne extends React.Component
{
    render()
    {
        return (<div>
            ChildOne
        </div>);
    }
}
function ChildTwo()
{
    return (<div>
        ChildTwo
    </div>);
}
export default class ClassBasedHelloWorld extends React.Component
{
    constructor(props) {
        super(props);
        console.log("Class Based Hello World constructor")
    }
    toUpper(message)
    {
        return message.toUpperCase();
    }
    render() {
        console.log('Render ',this.props.children);
        return (<div>
            <h1>Class component message {this.toUpper(this.props.message)}</h1>
            <ChildOne/>
            <ChildTwo/>
        </div>);
    }
}