import React from 'react';
import PropTypes from 'prop-types';

export default class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}
Greeting.defaultProps = {
    name: 'Good evening'
};
Greeting.propTypes = {
    name: PropTypes.string.isRequired
};