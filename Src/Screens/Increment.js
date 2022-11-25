import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {store} from '../redux/store';
class Increment extends Component {
  render() {
    return (
      <View style={{marginLeft: 20}}>
        <TouchableOpacity
          onPress={() => {
            store.dispatch({type: 'counter/incremented'});
          }}
          style={styles.buttonView}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonView: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 6,
  },
});

export default Increment;
