import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

export default class StatusbarBackground extends Component {

    render() {
        return (
            <View style={styles.StatusbarBackground}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    StatusbarBackground: {
        height: 20,
        backgroundColor: 'white'
    }
});