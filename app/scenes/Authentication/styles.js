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
        marginTop: 100,
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
        marginTop: 40,
        marginBottom: 40
    },
    loginButton: {
        borderWidth: 1,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    loginButtonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
        fontSize: 20
    },
    registerButton: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    registerButtonText: {
        color: 'white',
        fontSize: 20
    },
    textInput: {
        textAlignVertical: 'bottom',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        color: 'white',
        fontSize: 20
    }

});