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


LocaleConfig.locales['fr'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Agos.', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Juevez', 'Viernes', 'Sabado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.']
};

LocaleConfig.defaultLocale = 'fr';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }
    render() {
        return (
            <View style={styles.contenedor}>
                <View style={styles.calendario}>
                    <Calendar
                        // Collection of dates that have to be marked. Default = {}
                        markedDates={{
                            '2017-08-05': { selected: true, marked: true },
                            '2017-08-06': { marked: true, selected: true },
                            '2017-08-07': { selected: true, marked: true }
                        }}
                        onDayPress={this.onDayPress.bind(this)}
                    />
                </View>

                <View style={styles.agenda}>
                    <Item></Item>
                </View>

            </View>
        );
    }
    onDayPress(day) {

    }

}

class Item extends Component {

    render() {
        return (

            <Container>
                <Header>
                    <Body>
                        <Title>Programación</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <Content>
                        <List>
                            <ListItem itemDivider>
                                <Text>MAÑANA</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Simon Mignolet</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Nathaniel Clyne</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Dejan Lovren</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Dejan Lovren</Text>
                            </ListItem>
                            <ListItem itemDivider>
                                <Text>TARDE</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Dejan Lovren</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Dejan Lovren</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Dejan Lovren</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Dejan Lovren</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Dejan Lovren</Text>
                            </ListItem>
                        </List>
                    </Content>
                </ScrollView>
            </Container>
        )
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
