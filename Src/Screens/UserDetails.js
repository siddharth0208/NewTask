import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getUserDetails} from '../redux/actions';

class UserDetails extends Component {
  componentDidMount() {
    this.props.getUserDetails(this.props.route.params.id);
  }

  render() {
    console.log('userDetails', this.props.userDetails);
    return (
      <View style={styles.topView}>
        <Text style={styles.titleText}>User Details</Text>
        <Text style={styles.detailsText}>
          Id - {this.props.userDetails?.id}
        </Text>
        <Text style={styles.detailsText}>
          Name - {this.props.userDetails?.name}
        </Text>
        <Text style={styles.detailsText}>
          Email - {this.props.userDetails?.email}
        </Text>
        <Text style={styles.detailsText}>
          Username - {this.props.userDetails?.username}
        </Text>
        <Text style={styles.detailsText}>
          Phone - {this.props.userDetails?.phone}
        </Text>
        <Text style={styles.detailsText}>
          Website - {this.props.userDetails?.website}
        </Text>
        <Text style={styles.detailsText}>
          Address -{this.props.userDetails?.address}
        </Text>
        <Text style={styles.detailsText}>
          Zipcode - {this.props.userDetails?.zipcode}
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
const mapStateToProps = state => {
  return {
    userDetails: state.userReducer.userDetails,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: () => dispatch(getUserDetails()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
