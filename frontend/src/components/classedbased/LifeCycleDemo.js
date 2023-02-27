import React from 'react';
export default class LifeCycleDemo extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            initial : this.props.initial,
            count : this.props.initial,
            message: '',
        };
        this.btnHandler = this.btnHandler.bind(this);
    }
    componentDidMount() {
        console.log('Component did mount');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update prevProps',prevProps);
        console.log('Component did update preState',prevState);
    }

    componentWillUnmount() {
        console.log('Component will umount');
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
    static getDerivedStateFromProps(props, state)
    {
        console.log('getDerivedStateFromProps ',props, ' State ',state);
        if(props.initial != state.initial)
        {
            console.log('Property have been change');
            return {
                initial : props.initial,
                count : props.initial,
            }
        }
        else {
            return null;
        }
    }
    render() {
        console.log('Render');
        const changeMessageHandler = ()=>{
            this.setState({
                message : 'Change'
            });
        }
        return (<div>
            Life cycle
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