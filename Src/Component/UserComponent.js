import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class UserComponent extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.detailsText}>Id - {this.props.id}</Text>
        <Text style={styles.detailsText}>Name - {this.props.name}</Text>
        <Text style={styles.detailsText}>Email-{this.props.email}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    marginTop: 23,
    alignSelf: 'center',
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    borderColor: 'red',
  },
  detailsText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    marginVertical: 3,
    marginLeft: 7,
  },
});

export default UserComponent;
