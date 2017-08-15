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
    ScrollView,
    Linking
} from 'react-native';

import ViewContainer from '../components/ViewContainer'
import StatusbarBackground from '../components/StatusbarBackground'

export default class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />

                <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={{uri: this.props.image}} style={styles.image} resizeMode="contain"/>
                        </View>
                    <ScrollView style={styles.colorContainer} automaticallyAdjustContentInsets={false} showsVerticalScrollIndicator={false}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>
                                {this.props.title}
                            </Text>
                            <Text style={styles.description}>
                                {this.props.description}
                            </Text>
                            <TouchableOpacity style={styles.readButton} onPress={() => Linking.openURL(this.props.url)}>
                                <Text style={styles.readButtonText}>Read More</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        marginTop: 40,
        height: 300
    },
    colorContainer: {
        backgroundColor: 'white'
    },
    textContainer: {
        margin: 20
    },
    title:{
        fontSize: 28,
        color: '#F0141E'
    },
    description:{
        marginTop:10,
        fontSize: 18,
    },
    image: {
        alignSelf: 'center',
        height: 300,
        width: 600,
        backgroundColor: 'black'
    },
    readButton: {
        marginTop: 10,
        borderWidth: 1,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    readButtonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white'
    }
});