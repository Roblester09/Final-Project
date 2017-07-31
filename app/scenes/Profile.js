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

export default class Profile extends Component {

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />

                <View style={styles.profilePicture}>
                    <View style={styles.profilePictureBorder}>
                        <Image source={require('../resources/profilePic.jpg')} />
                    </View>
                </View>

                <View style={styles.profileName}>
                    <Text style={styles.profileNameText}>ROBERT LESTER</Text>
                </View>

                <View style={styles.profilesDescription}>
                    <Text style={styles.profilesDescriptionText}>First Line</Text>
                    <Text style={styles.profilesDescriptionText}>Second Line Second Line Second Line</Text>
                    <Text style={styles.profilesDescriptionText}>Third Line Third Line</Text>
                </View>

                <View style={styles.personalDescription}>
                    <View style={styles.columnOne}>
                        <Text style={styles.personalDescriptionText}>
                            ipsum ipsum ipsum
                        </Text>
                        <Text style={styles.personalDescriptionText}>
                            ipsum ipsum ipsum
                        </Text>
                        <Text style={styles.personalDescriptionText}>
                            ipsum ipsum ipsum
                        </Text>
                    </View>
                    <View style={styles.columnTwo}>
                        <Text style={styles.personalDescriptionText}>
                            ipsum ipsum
                        </Text>
                        <Text style={styles.personalDescriptionText}>
                            ipsum ipsum
                        </Text>
                        <Text style={styles.personalDescriptionText}>
                            ipsum ipsum
                        </Text>
                    </View>
                </View>

            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    profilePicture: {
        alignItems: 'center',
        marginTop: 70
    },
    profilePictureBorder: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        width: 200,
        overflow: 'hidden'
    },
    profileName: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 24
    },
    profileNameText: {
        fontSize: 24,
        color: 'blue'
    },
    profilesDescription: {
        alignItems: 'center',
        marginBottom: 50,
        paddingLeft: 35,
        paddingRight: 35
    },
    profilesDescriptionText: {
        fontSize: 12
    },
    personalDescription: {
        flex: 1,
        flexDirection: 'row'
    },
    personalDescriptionText: {
        fontSize: 12,
        marginBottom: 30
    },
    columnOne: {
        flex: 1,
        paddingLeft: 50
    },
    columnTwo: {
        flex: 1,
        paddingLeft: 50
    }
});