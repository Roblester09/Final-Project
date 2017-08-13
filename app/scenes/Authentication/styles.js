import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor: 'white'
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
        marginTop: 80,
        marginBottom: 40
    },
    loginButton: {
        borderWidth: 1,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center'
    },
    loginButtonText: {
        textAlign: 'center',
        padding: 10
    },
    registerButton: {
        alignItems: 'center'
    },
    textInput: {
        textAlignVertical: 'bottom',
        borderBottomWidth: 1,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20
    }

});