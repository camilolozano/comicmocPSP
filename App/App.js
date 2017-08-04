/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import { Container, Header, Content, List, ListItem, Body, Title } from 'native-base';
import Diary from './Screen/Agenda';
import Firebase from './firebase';
import Orientation from 'react-native-orientation';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        isReady: false,
    };

    componentDidMount() {
        Orientation.lockToPortrait();
        setTimeout(() => {
            this.setState({ isReady: true });
        }, 1000);
    }

    render() {
        if (!this.state.isReady) {
            return (
                <Image
                    source={require('./Assets/app-fondo-.png')}
                    style={styles.backgroundimage}
                >
                    <View style={styles.container}>
                        <Image
                            source={require('./Assets/logo.png')}
                            style={styles.image}
                        />
                        <Text
                            style={styles.text}
                        >Cargando...</Text>
                    </View>
                </Image>
            )
        }
        return <Diary />
    }

}

const styles = StyleSheet.create({
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover',
        width: width,
        height: height,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
    text: {
        fontSize: 16,
        color: 'white'
    }

});
