import React from 'react';
export default class LifeCycleTwo extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            message : '',
        };
        this.btnHandler = this.btnHandler.bind(this);
        console.log("LifeCycleTwo Contructor");
    }
    btnHandler()
    {
        console.log('Btn Handler ',this);
        this.setState({
            count : this.state.count+1
        });

        //Big problem
        //this.state.count = this.state.count +1;
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Should component update');
        return nextState.count != this.state.count;
        //return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate ");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update');
    }

    componentDidMount() {
        console.log("LifeCycleTwo Component did mount");
    }

    render() {
        const changeMessageHandler = ()=>{
            this.setState({
                message : 'Change'
            });
        }
        console.log("LifeCycleTwo Render");
        return (<div>
            Life cycle2
            Counter {this.state.count}

            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={this.btnHandler}
            >+</button>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={changeMessageHandler}
            >Update Message</button>
        </div>);
    }
}