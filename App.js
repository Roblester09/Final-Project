import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import App from './app/App'

export default class socialapp extends Component {
    render() {
        return (
            <App />
        );
    }
}

Expo.registerRootComponent('socialapp', () => socialapp);
