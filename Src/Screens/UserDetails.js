import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {connect} from 'react-redux';
import {getUserDetails} from '../redux/actions';

class UserDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getUserDetails(this.props.route.params.id);
  };
  /* componentDidMount() {
    this.props.getUserDetails(this.props.route.params.id);
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
       
      }
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription();
  } */

  render() {
    return (
      <SafeAreaView style={styles.topView}>
        <Text style={styles.titleText}>User Details</Text>

        <Text style={styles.detailsText}>
          Id - {this.props?.userDetails?.id}
        </Text>
        <Text style={styles.detailsText}>
          Name - {this.props?.userDetails?.name}
        </Text>
        <Text style={styles.detailsText}>
          Email - {this.props?.userDetails?.email}
        </Text>
        <Text style={styles.detailsText}>
          Username - {this.props?.userDetails?.username}
        </Text>
        <Text style={styles.detailsText}>
          Phone - {this.props?.userDetails?.phone}
        </Text>
        <Text style={styles.detailsText}>
          Website - {this.props?.userDetails?.website}
        </Text>
        <Text style={styles.detailsText}>
          Address -{this.props?.userDetails?.address?.city}
        </Text>
        <Text style={styles.detailsText}>
          Zipcode - {this.props?.userDetails?.address?.zipcode}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  topView: {
    flex: 1,
    marginHorizontal: '5%',
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
  button: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    marginTop: '7%',
    borderRadius: 12,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
const mapStateToProps = state => {
  return {
    userDetails: state.userReducer.userDetails,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: id => dispatch(getUserDetails(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
