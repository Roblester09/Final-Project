import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    NavigatorIOS
} from 'react-native';

import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import Register from './Register'
import Discover from '../Discover/Discover'
import { firebaseRef } from '../../services/firebase'
import { styles } from './styles'

// import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk'
// import firebase from 'firebase'
// import firebaseConfig from './app/services/firebase'
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {

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
            password: '',
            status: ''
        };

        this._login = this._login.bind(this);
        this._register = this._register.bind(this);
    }

    _login = () => {
        firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle errors here
            console.log(error.code);
            console.log(error.message);
        });

        this.props.navigator.push({
            component: Discover,
            title: 'Discover Comics'
        });
    }

    _register = () => {
        this.props.navigator.push({
            component: Register,
            title: 'Register'
        });
    };

    _onFocus() {

    }

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />
                <View style={styles.viewContainer}>
                    <View style={styles.logo}>
                        <Image style={{width: 258, height: 150}} source={require('../../resources/Logo.jpg')}/>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        placeholder='EMAIL'
                        placeholderTextColor='black'
                        autoCorrect={false}
                        onFocus={this.onFocus}
                        returnKeyType='next'
                        keyboardAppearance='dark'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        placeholder='PASSWORD'
                        placeholderTextColor= 'black'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        returnKeyType='go'
                        keyboardAppearance='dark'
                    />
                    {/*<Icon name='facebook-official' size={50} color='blue' style={styles.icon}/>*/}
                    {/*<Button*/}
                    {/*onPress={this._fbAuth}*/}
                    {/*title='Login with Facebook'*/}
                    {/*/>*/}

                    <View style={styles.login}>
                        <TouchableOpacity style={styles.loginButton} onPress={this._login}>
                            <Text style={styles.loginButtonText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.register}>
                        <TouchableOpacity style={styles.registerButton} onPress={this._register}>
                            <Text style={styles.registerButtonText}>create account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ViewContainer>
        );
    }
}