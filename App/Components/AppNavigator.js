import React, { Component} from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../Screen/Agenda';
import Sponsors from '../Screen/Sponsors';

const Stacks = StackNavigator({
    HomeScreen: {
      screen: HomeScreen
    },
    Sponsors: {
      screen: Sponsors
    }
});

export default class AppNavigator extends Component {
  render() {
    return (
      <Stacks />
    );
  }
}