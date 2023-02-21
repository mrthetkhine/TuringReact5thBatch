import React, {useState} from 'react';
import './class-component.css';
export default class ClassComponent extends React.Component
{
    render() {
        //const [state,setState] =useState();
        return(<div className={"class-component"}>
            Class Component Example
        </div>)
    }
}