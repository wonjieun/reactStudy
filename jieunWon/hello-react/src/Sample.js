import React, { Component } from 'react';

class Sample extends Component {
    static defaultProps = {
        onIncrement: () => console.warn('onIncrement is not defined');
        object: {},
        arrya: []
    }
}