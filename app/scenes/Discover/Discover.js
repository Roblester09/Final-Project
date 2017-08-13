import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import comicDiscover from './comicDiscover'
import characterDiscover from './characterDiscover'


export default class Discover extends Component {

    constructor(props) {
        super(props);

        this.comicDiscover = this.comicDiscover.bind(this);
        this.characterDiscover = this.characterDiscover.bind(this);

    }

    comicDiscover = () => {
        this.props.navigator.push({
            component: comicDiscover,
            title: 'Comics'
        });
    };

    characterDiscover = () => {
        this.props.navigator.push({
            component: characterDiscover,
            title: 'Characters'
        });
    };

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />
                <Image source={require('../../resources/discover.jpg')} style={styles.viewImage}>
                <View style={styles.sectionContainer}>
                    <ScrollView>
                        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.comicDiscover()}>
                            <Text style={styles.discoverButtonText}>Comics</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.characterDiscover()}>
                            <Text style={styles.discoverButtonText}>Characters</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
                </Image>
            </ViewContainer>
        );
    }

}

const styles = StyleSheet.create({
    viewImage:{
        flex: 1,
        width: null,
        height: null,
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    buttonContainer: {
        borderWidth: 1,
        height: 150,
        width: 300,
        margin: 20,
        marginBottom: 100,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        opacity: .6
    },
    discoverButtonText: {
        color: 'black',
        padding: 10,
        fontSize: 50
    }
});