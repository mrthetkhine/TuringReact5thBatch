import React, {useState} from 'react';
export default class ClassCounter extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message : 'Hello'
        };
       /* this.state = {
            count : 0
        }*/
        this.btnHandler = this.btnHandler.bind(this);
    }
    btnHandler()
    {
        console.log('Btn Handler ',this);
        this.setState({
            count : this.state.count+1
        },()=>{
            console.log('Count ',this.state.count);
        });

        //Big problem
        //this.state.count = this.state.count +1;
    }
    render() {
        console.log('Render ');
        //const [count,setCount] = useState();
        return (<div>
            Counter {this.state.count}
            <div> Message {this.state.message}</div>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={this.btnHandler}
            >+</button>
        </div>);
    }
}