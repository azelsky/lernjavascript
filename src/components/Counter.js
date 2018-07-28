import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {increment} from '../AC';

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    render(){
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button onClick = {this.handleIncrement}>Increment me</button>
            </div>
        )
    }

    handleIncrement = () => {
        this.props.increment()
    }
}

export default connect((state) => ({
    count: state.count
}), {increment: increment})(Counter)