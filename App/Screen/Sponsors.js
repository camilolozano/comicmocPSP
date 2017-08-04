import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

const { height, width } = Dimensions.get('window');
export default class ScreenItemUno extends Component {
  static navigationOptions = {
    title: 'Regresar',
  };
  render() {
    const texto = `Con el apoyo de:`;
    return (
      <Image
        source={require('../Assets/app-fondo-blanco.png')}
        style={styles.backgroundimage}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require('../Assets/logo.png')}
            />
          </View>
          <View style={styles.logosContainer}>
            <Text style={styles.textos}>
              {texto}
            </Text>
            <Image
              style={{ width: 400, height: 100 }}
              source={require('../Assets/psp-normal.png')}
            />
            <View style={styles.logos2Container}>
              <Text style={styles.textos}>
                Implementado por
            </Text>
              <Image
                style={{ width: 200, height: 70 }}
                source={require('../Assets/log-allnexus.png')}
              />
            </View>
          </View>
        </View>
      </Image>
    );
  };
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
  },
  imageContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  logosContainer: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logos2Container: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textos: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  },
});