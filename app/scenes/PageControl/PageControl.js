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


export default class PageControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0
        }

        this._onPageControlViewChange = this._onPageControlViewChange.bind(this)

        _onPageControlViewChange() {

        }
    }

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />

                <View style={styles.scrolViewContainer}>
                    <ScrollView horizontal={true}>
                        <View style={styles.scrollScene}>
                            <Profile />
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