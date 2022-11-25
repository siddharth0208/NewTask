import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: null,
    };
  }
  componentDidMount() {
    const {id} = this.props.route.params;
    let self = this;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(function (response) {
        console.log('data', response.data);
        self.setState({userDetails: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.topView}>
        <Text style={styles.titleText}>User Details</Text>
        <Text style={styles.detailsText}>
          Id - {this.state.userDetails?.id}
        </Text>
        <Text style={styles.detailsText}>
          Name - {this.state.userDetails?.name}
        </Text>
        <Text style={styles.detailsText}>
          Email - {this.state.userDetails?.email}
        </Text>
        <Text style={styles.detailsText}>
          Username - {this.state.userDetails?.username}
        </Text>
        <Text style={styles.detailsText}>
          Phone - {this.state.userDetails?.phone}
        </Text>
        <Text style={styles.detailsText}>
          Website - {this.state.userDetails?.website}
        </Text>
        <Text style={styles.detailsText}>
          Address - {this.state.userDetails?.address?.street}
        </Text>
        <Text style={styles.detailsText}>
          Zipcode - {this.state.userDetails?.address?.zipcode}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topView: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  detailsText: {
    fontSize: 20,
    marginVertical: 7,
  },
});
export default UserDetails;
