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
import {
  Calendar,
  LocaleConfig
} from 'react-native-calendars';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Body,
  Title,
  Left,
  Right
} from 'native-base';
import {
  Friday,
  FridayLate
} from '../Services/ServicesFriday';
import {
  Saturday,
  SaturdayLate
} from '../Services/ServicesSaturday';
import {
  Sunday,
  SundayLate
} from '../Services/ServicesSunday';

LocaleConfig.locales['Es'] = {
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Agos.', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Juevez', 'Viernes', 'Sabado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.']
};

LocaleConfig.defaultLocale = 'Es';
const { height, width } = Dimensions.get('window');

export default class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      morning: [],
      late: [],
      noEvent: false,
      dateSelected: '',
      markers: {
        '2017-08-04': { selected: true, marked: true, },
        '2017-08-05': { selected: true, marked: true },
        '2017-08-06': { selected: true, marked: true }
      }
    };
  }

  componentDidMount() {
    this.setState({ morning: Friday, late: FridayLate, noEvent: false });
  }

  onDayPress = (day) => {
    switch (day.day) {
      case 4:
        this.setState({
          morning: Friday,
          late: FridayLate,
          dateSelected: day.dateString,
          markers: {
            '2017-08-04': { selected: true, marked: true },
            '2017-08-05': { selected: false, marked: true },
            '2017-08-06': { selected: false, marked: true }
          },
          noEvent: false
        });
        break;
      case 5:
        this.setState({
          morning: Saturday,
          late: SaturdayLate,
          dateSelected: day.dateString,
          markers: {
            '2017-08-04': { selected: false, marked: true },
            '2017-08-05': { selected: true, marked: true },
            '2017-08-06': { selected: false, marked: true }
          },
          noEvent: false
        });
        break;
      case 6:
        this.setState({
          morning: Sunday,
          late: SundayLate,
          dateSelected: day.dateString,
          markers: {
            '2017-08-04': { selected: false, marked: true },
            '2017-08-05': { selected: false, marked: true },
            '2017-08-06': { selected: true, marked: true }
          },
          noEvent: false
        });
        break;
      default:
        this.setState({ noEvent: true, dateSelected: day.dateString });
        break;
    }
  }

  renderListItemsMorning() {
    const { morning } = this.state;
    if (!morning) {
      return null;
    }
    if (!this.state.noEvent) {
      return morning.map((item, index) => (
        <ListItem avatar key={index}>
          <Left>
            <Text>{item.hora}</Text>
          </Left>
          <Body>
            <Text>{item.actividad}</Text>
            <Text note>{item.responsable}</Text>
            <Text note>{item.lugar}</Text>
          </Body>
        </ListItem>
      ));
    }
    return (
      <ListItem>
        <Text>Esta jornada no hay eventos...</Text>
      </ListItem>
    )
  }

  renderListItemslate() {
    const { late } = this.state;
    if (!late) {
      return null;
    }
    if (!this.state.noEvent) {
      return late.map((item, index) => (
        <ListItem avatar key={index}>
          <Left>
            <Text>{item.hora}</Text>
          </Left>
          <Body>
            <Text>{item.actividad}</Text>
            <Text note>{item.responsable}</Text>
            <Text note>{item.lugar}</Text>
          </Body>
        </ListItem>
      ));
    }
    return (
      <ListItem>
        <Text>Esta jornada no hay eventos...</Text>
      </ListItem>
    )
  }

  render() {

    return (
      <Image
        source={require('../Assets/app-fondo-blanco.png')}
        style={styles.backgroundimage}
      >
        <View style={styles.container}>
          <View style={styles.calendar}>
            <Calendar
              // Collection of dates that have to be marked. Default = {}
              markedDates={this.state.markers}
              onDayPress={this.onDayPress}
            />
          </View>
          <View style={styles.diary}>
            <Container>
              <ScrollView>
                <Content>
                  <List>
                    <ListItem itemDivider>
                      <Text style={styles.title}>Agenda mañana</Text>
                    </ListItem>
                    {this.renderListItemsMorning()}
                    <ListItem itemDivider>
                      <Text style={styles.time}>Agenda tarde</Text>
                    </ListItem>
                    {this.renderListItemslate()}
                  </List>
                </Content>
              </ScrollView>
            </Container>
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendar: {
    flex: 2,
  },
  diary: {
    flex: 4,
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'cover',
    width: width,
    height: height,
  },
  title: {
    color: 'red',
    fontSize: 20
  },
  time: {
    color: 'blue',
    fontSize: 20
  }

});
