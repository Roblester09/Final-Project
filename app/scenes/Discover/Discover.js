import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet,
    Image
} from 'react-native';

import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'

export default class Discover extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this._renderRow = this._renderRow.bind(this);

        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2'])
        }
    }

    _renderRow(rowData) {
        return (
            <Text>
                {rowData}
            </Text>
        )
    }


    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </ViewContainer>
        );
    }
}