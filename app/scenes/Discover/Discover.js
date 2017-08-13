import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import Profile from '../Profile'

const REQUEST_URL = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=7dc6959747f51f2ffa80caaff5969562&hash=0e0ad914cbc055b4f71b3258119519cf';

export default class Discover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };

        this.renderComic = this.renderComic.bind(this);
        this.onComicPressed = this.onComicPressed.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
                    loaded: true
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ViewContainer>
                <StatusbarBackground />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderComic}
                />
            </ViewContainer>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading comics...
                </Text>
            </View>
        );
    }

    renderComic(comic) {
        return (
            <View style={styles.sectionContainer}>
                <TouchableHighlight onPress={() => this.onComicPressed(comic)}>
                <View style={styles.comicContainer}>
                    <View style={styles.imageRadius}>
                        <Image source={{uri: comic.thumbnail.path + '.jpg'}} style={styles.backgroundImage}>
                        </Image>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{comic.title}</Text>
                    </View>
                </View>
                </TouchableHighlight>
            </View>
        );
    }

    onComicPressed(comic){
        console.log('Choosing a comic: '+ comic.title);
        this.props.navigator.push({
            component: Profile,
            title: comic.title,
            passProps: {
                title: comic.title,
                image: comic.thumbnail.path+'.jpg',
                description: comic.description,
                url: comic.urls[0].url,
                //characters: comic.characters.items[1].name
            },
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    comicContainer: {
        height: 200,
        width: 350,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'auto',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imageRadius: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomWidth: 1,
        overflow: 'hidden'
    },
    backgroundImage:{
        height: 100,
        width: 348,
        alignSelf: 'auto',
        alignItems: 'center'
    },
    rightContainer: {
        alignSelf: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        color: '#000000'
    }
});