import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Login from './scenes/Authentication/Login'
import Register from './scenes/Authentication/Register'
import Profile from './scenes/Profile'
import PageControl from './scenes/PageControl/PageControl'
import { Router, Scene } from 'react-native-router-flux'

export default class App extends Component {

    render() {
        return (
            <Router>
                <Scene key={'root'}>
                    <Scene
                        key={'login'}
                        component={Login}
                        initial={true}
                        hideNavBar={true}
                    />
                    <Scene
                        key={'register'}
                        component={Register}
                        hideNavBar={true}
                    />
                    <Scene
                        key={'pagecontrol'}
                        component={PageControl}
                        hideNavBar={true}
                    />
                </Scene>
            </Router>
        );
    }
}