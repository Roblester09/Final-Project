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

import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import { styles } from './styles'

export default class Register extends Component {

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
                <View style={styles.logoReg}>
                    <Image style={{width: 258, height: 150}} source={require('../../resources/Logo.jpg')}/>
                </View>
                <TextInput
                    style={styles.textInput}
                    onChange={(text) => this.setState({email: text})}
                    value={this.state.email}
                    placeholder='EMAIL'
                    placeholderTextColor='black'
                    autoCorrect={false}
                    returnKeyType='next'
                    keyboardAppearance='dark'
                />
                <TextInput
                    style={styles.textInput}
                    onChange={(text) => this.setState({password: text})}
                    value={this.state.password}
                    placeholder='PASSWORD'
                    placeholderTextColor= 'black'
                    secureTextEntry={true}
                    autoCorrect={false}
                    returnKeyType='go'
                    keyboardAppearance='dark'
                />
                <TextInput
                    style={styles.textInput}
                    onChange={(text) => this.setState({password: text})}
                    value={this.state.password}
                    placeholder='PASSWORD'
                    placeholderTextColor= 'black'
                    secureTextEntry={true}
                    autoCorrect={false}
                    returnKeyType='go'
                    keyboardAppearance='dark'
                />

                <View style={styles.login}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </ViewContainer>
        );
    }
}