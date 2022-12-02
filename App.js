import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Counter from './Src/Screens/Counter';
import Increment from './Src/Screens/Increment';
import Decrement from './Src/Screens/Deincrement';
import UserList from './Src/Screens/UserList';
import UserDetails from './Src/Screens/UserDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {configureStore} from './Src/redux/store';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 0,
      loader: false,
    };
  }
  fetchData = async () => {
    console.log('async');
    try {
      console.log('try');
      let value = await AsyncStorage.getItem('Counter_Key');

      if (value != null) {
        value = JSON.parse(value);
        console.log('if');
        this.setState({count: value});
      } else {
        console.log('else');
        this.setState({count: 0});
      }
    } catch (e) {
      console.log(e);
    }
  };
  getData = async () => {
    console.log('async');
    try {
      console.log('try');
      let value = await AsyncStorage.getItem('@storage_Key');

      if (value != null) {
        value = JSON.parse(value);
        console.log('if');
        this.setState({count2: value});
      } else {
        console.log('else');
        this.setState({count2: 0});
      }

      this.setState({
        loader: false,
      });
    } catch (e) {
      console.log(e);
    }
  };
  Increment = async () => {
    try {
      this.setState({
        loader: true,
      });
      let value = await AsyncStorage.getItem('@storage_Key');
      value = JSON.parse(value);
      value = value + 1;
      console.log('inside increment', value);
      await AsyncStorage.setItem('@storage_Key', value.toString());
      this.getData();
    } catch (e) {
      console.log(e);
    }
  };
  Deincrement = async () => {
    if (this.state.count2 >= 1) {
      try {
        this.setState({
          loader: true,
        });
        let value = await AsyncStorage.getItem('@storage_Key');
        value = JSON.parse(value);
        value = value - 1;
        console.log('inside increment', value);
        await AsyncStorage.setItem('@storage_Key', value.toString());
        this.getData();
      } catch (e) {
        console.log(e);
      }
    }
  };
  componentDidMount() {
    this.fetchData();
    this.getData();
  }

  render() {
    console.log('render');
    const setValue = value => {
      console.log('value', value);
      this.setState({count: value});
    };
    return (
      <Provider store={configureStore}>
        <Counter count={this.state.count} />
        <Increment setState={setValue} />
        <Decrement setState={setValue} />
        <View>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>CounterV2 -{this.state.count2}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.Increment();
            }}
            style={styles.buttonView}>
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
          {this.state.count2 > 0 ? (
            <TouchableOpacity
              onPress={() => {
                this.Deincrement();
              }}
              style={styles.buttonView}>
              <Text style={styles.buttonText}>Deincrement</Text>
            </TouchableOpacity>
          ) : (
            []
          )}
        </View>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={UserList} />
            <Stack.Screen name="Details" component={UserDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    marginTop: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  buttonView: {
    marginTop: 20,
    backgroundColor: 'grey',
    borderRadius: 15,
    width: '35%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'Black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 6,
  },
});

export default App;
