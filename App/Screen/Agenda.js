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
  ScrollView
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Container, Header, Content, List, ListItem, Body, Title } from 'native-base';


LocaleConfig.locales['Es'] = {
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Agos.', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Juevez', 'Viernes', 'Sabado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.']
};

LocaleConfig.defaultLocale = 'Es';

export default class Agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      component: '',
      mañana: [],
      Tarde: [],
    };
  }

  onDayPress = (day) => {
    switch (day.day) {
      case 4:
        const mañana1 = [
          'uno',
          'dos',
          'tres'
        ];
        const tarde1 = [
          'cuatro',
          'cinco',
          'seis'
        ];
        this.setState({ component: 'Uno' });
        this.setState({ mañana: mañana1 });
        this.setState({ tarde: tarde1 });
        break;
      case 5:
        const mañana2 = [
          'siete',
          'ocho',
          'nueve'
        ];
        const tarde2 = [
          'dies',
          'once',
          'doce'
        ];
        this.setState({ component: 'Uno' });
        this.setState({ mañana: mañana2 });
        this.setState({ tarde: tarde2 });
        break;
      case 6:
        const mañana3 = [
          'trece',
          'catorce',
          'quince'
        ];
        const tarde3 = [
          'diesiseis',
          'diesisiete',
          'diesiocho'
        ];
        this.setState({ component: 'Uno' });
        this.setState({ mañana: mañana3 });
        this.setState({ tarde: tarde3 });
        break;
      case 7:
        const mañana4 = [
          'diesinueve',
          'veinte',
          'veintiuno'
        ];
        const tarde4 = [
          'veintidos',
          'veintitres',
          'veinticuatro'
        ];
        this.setState({ component: 'Uno' });
        this.setState({ mañana: mañana4 });
        this.setState({ tarde: tarde4 });
        break;
      default:
        break;
    }
  }

  renderListItems() {
    const { mañana } = this.state;

    if (!mañana) {
      return null;
    }

    return mañana.map((item, index) => (
      <ListItem key={index}>
        <Text>{item}</Text>
      </ListItem>
    ));
  }

  render() {

    return (
      <View style={styles.contenedor}>
        <View style={styles.calendario}>
          <Calendar
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
              '2017-08-04': { selected: true, marked: true },
              '2017-08-05': { selected: true, marked: true },
              '2017-08-06': { marked: true, selected: true },
              '2017-08-07': { selected: true, marked: true }
            }}
            onDayPress={this.onDayPress}
          />
        </View>
        <View style={styles.agenda}>
          <Container>
            <ScrollView>
              <Content>
                <List>
                  <ListItem itemDivider>
                    <Text>MAÑANA</Text>
                  </ListItem>
                  {this.renderListItems()}
                </List>
              </Content>
            </ScrollView>
          </Container>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  calendario: {
    flex: 3,
  },
  agenda: {
    flex: 3,
  }

});
