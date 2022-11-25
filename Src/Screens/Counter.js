import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {store} from '../redux/store';
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Counter -{this.props.value}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleView: {
    marginTop: 23,
    marginLeft: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});

const mapStateToProps = function (state) {
  console.log('counter1 state', state);
  return {value: state.value};
};

export default connect(mapStateToProps)(Counter);
