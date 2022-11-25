import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Counter from './Src/Screens/Counter';
import Deincrement from './Src/Screens/Deincrement';
import Increment from './Src/Screens/Increment';
import {store, persistor} from './Src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './Src/Navigation/Navigation';

class App extends Component {
  render() {
    console.log('store', store);
    return (
      <View>
        <Provider store={store}>
          <Counter />
          <Increment />
          <Deincrement />
          <Counter2 />
        </Provider>
      </View>
    );
  }
}
// couter2 code
class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Value: store.getState().value2,
    };
  }
  render() {
    store.subscribe(() => {
      let {value2} = store.getState();
      this.setState({Value: value2});
    });

    return (
      <View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>CounterV2 -{this.state.Value}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            store.dispatch({type: 'counter2/incremented'});
          }}
          style={styles.buttonView}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            store.dispatch({type: 'counter2/decremented'});
          }}
          style={styles.buttonView}>
          <Text style={styles.buttonText}>Deincrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    marginTop: 23,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
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
