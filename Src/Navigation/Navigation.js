import React, {Component} from 'react';

import UserList from '../Screens/UserList';

import UserDetails from '../Screens/UserDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="users"
            component={UserList}
            navigation={this.navigation}
          />
          <Stack.Screen
            name="userDetails"
            component={UserDetails}
            navigation={this.navigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigation;
