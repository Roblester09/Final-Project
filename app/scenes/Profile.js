import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';

import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'

// import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk'
// import firebase from 'firebase'
// import firebaseConfig from './app/services/firebase'
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component {

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />

            </ViewContainer>
        );
    }
}