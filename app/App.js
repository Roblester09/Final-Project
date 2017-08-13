import React, { Component } from 'react';
import {
    AppRegistry,
    NavigatorIOS,
    StyleSheet
} from 'react-native';

import Login from './scenes/Authentication/Login'

export default class App extends Component {


    render() {

        return (

            <NavigatorIOS
                style={styles.navigationContainer}
                initialRoute={{
                    component: Login,
                    title: 'Login'
                }}
                renderScene={ this.renderScene }
            />
        )
    }
}

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
    }
});