import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import PageControlIOS from 'react-native-pagecontrol'
import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import Profile from '../Profile'
import Discover from '../Discover/Discover'

const window = Dimensions.get('window');

export default class PageControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0
        };

        this._onPageControlViewChange = this._onPageControlViewChange.bind(this);
        this._onScroll = this._onScroll.bind(this);

    }

    _onPageControlViewChange(currentPage) {
        this.refs.ScrollView.scrollResponderScrollTo({x: this.state.width * currentPage, y: 0, animated: true});
    }

    _onScroll({nativeEvent}) {
        let currentPage = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

        if (this.state.currentPage !== currentPage) {
            this.setState({currentPage});
        }
    }

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />

                <View style={styles.scrollViewContainer}>
                    <ScrollView
                        horizontal={true}
                        ref='ScrollView'
                        onScroll={this._onScroll}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.scrollScene}>
                            <Discover />
                        </View>
                        <View style={styles.scrollScene}>
                            <Profile />
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.pageControl}>
                    <PageControlIOS
                        currentPage={this.state.currentPage}
                        numberOfPages={2}
                        pageIndicatorTintColor='grey'
                        currentPageIndicatorTintColor='black'

                    />
                </View>

            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1
    },
    scrollScene: {
        width: window.width
    }
});