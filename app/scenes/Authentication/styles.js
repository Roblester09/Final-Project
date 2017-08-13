import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    viewImage:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch'
    },
    logo:{
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 80
    },
    logoReg:{
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 60
    },
    login: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 60,
        marginBottom: 40
    },
    loginButton: {
        borderWidth: 1,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    loginButtonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white'
    },
    registerButton: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    registerButtonText: {
        color: 'white'
    },
    textInput: {
        textAlignVertical: 'bottom',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        color: 'white'
    }

});