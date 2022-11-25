import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {store} from '../redux/store';

class Deincrement extends Component {
  render() {
    return (
      <View style={{marginLeft: 20}}>
        <TouchableOpacity
          onPress={() => {
            store.dispatch({type: 'counter/decremented'});
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

export default Deincrement;
