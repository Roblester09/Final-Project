import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/App'

export default class socialapp extends Component {

    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('socialapp', () => socialapp);
