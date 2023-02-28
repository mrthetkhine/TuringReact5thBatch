import React from 'react';
export default class BugComponent extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        throw new Error('Something went wrong');
        return (<div>
            Bug
        </div>);
    }
}