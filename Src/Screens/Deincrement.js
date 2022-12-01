import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Decrement extends Component {
  substract = async () => {
    let check = await AsyncStorage.getItem('Counter_Key');
    if (check >= 1) {
      try {
        let value = await AsyncStorage.getItem('Counter_Key');
        value = JSON.parse(value);
        value = value - 1;
        console.log('inside increment', value);
        await AsyncStorage.setItem('Counter_Key', value.toString());
        let val2 = await AsyncStorage.getItem('Counter_Key');
        this.props.setState(val2);
      } catch (e) {
        console.log(e);
      }
    }
  };
  render() {
    return (
      <View style={{marginLeft: 20, marginRight: 20}}>
        <TouchableOpacity
          onPress={() => {
            this.substract();
          }}
          style={styles.buttonView}>
          <Text style={styles.buttonText}>Deincrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonView: {
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 5,
  },
});

export default Decrement;
