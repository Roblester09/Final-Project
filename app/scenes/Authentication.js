import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';

import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'

// import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk'
// import firebase from 'firebase'
// import firebaseConfig from './app/services/firebase'
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class Authentication extends Component {

    // _fbAuth() {
    //     LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(function(result) {
    //         if (result.isCancelled) {
    //             console.log("Login Cancelled");
    //         } else {
    //             AccessToken.getCurrentAccessToken().then((accessTokenData) => {
    //                 const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken);
    //                 firebase.auth().signInWithCredential(credential).then((result) => {
    //                     // Promise was successful
    //                 }, (error) => {
    //                     // Promise was rejected
    //                     console.log(error)
    //                 })
    //             }, (error => {
    //                 console.log('Some error occurred: ' + error)
    //             }))
    //         }
    //     }, function(error) {
    //         console.log("An error occurred: " + error);
    //     });
    // }

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />
                <TextInput
                    style={styles.textInput}
                    onChange={(text) => this.setState({email: text})}
                    value={this.state.email}
                    placeholder='EMAIL'
                    placeholderTextColor= 'black'
                />
                <TextInput
                    style={styles.textInput}
                    onChange={(text) => this.setState({password: text})}
                    value={this.state.password}
                    placeholder='PASSWORD'
                    placeholderTextColor= 'black'
                    secureTextEntry={true}
                />
                {/*<Icon name='facebook-official' size={50} color='blue' style={styles.icon}/>*/}
                {/*<Button*/}
                {/*onPress={this._fbAuth}*/}
                {/*title='Login with Facebook'*/}
                {/*/>*/}
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        textAlignVertical: 'bottom',
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    }

});