import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Counter extends Component {
  render() {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Counter -{this.props.count}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleView: {
    marginTop: 50,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default Counter;
