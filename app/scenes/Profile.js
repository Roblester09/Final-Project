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
                    <ScrollView automaticallyAdjustContentInsets={false} showsVerticalScrollIndicator={false}>
                        <View style={styles.imageContainer}>
                            <Image source={{uri: this.props.image}} style={styles.image} />
                        </View>
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
    textContainer: {
        margin: 20
    },
    title:{
        fontSize:23,
        color: '#007AFF'
    },
    description:{
        marginTop:10,
        fontSize: 12,
    },
    image: {
        alignSelf: 'auto',
        height: 300,
        width: 600
    },
    readButton: {
        marginTop: 10,
        borderWidth: 1,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center'
    },
    readButtonText: {
        textAlign: 'center',
        padding: 10
    }
});