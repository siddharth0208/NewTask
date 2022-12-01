import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import UserComponent from '../Component/UserComponent';
import {getUserList} from '../redux/actions';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.props.getUserList();
    /*  let self = this;
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        console.log('data', response.data);
        self.setState({user: response.data});
        console.log('user', self.state.user);
      })
      .catch(function (error) {
        console.log(error);
      }); */
  }

  render() {
    return (
      <View style={styles.topView}>
        <Text style={styles.titleText}>Users -</Text>
        <FlatList
          scrollEnabled={true}
          data={this.props?.userList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    id: item.id,
                  });
                }}>
                <UserComponent
                  id={item.id}
                  name={item.name}
                  email={item.email}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topView: {
    // marginTop: 20,
    // marginLeft: 15,
    flex: 1,
    // marginBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return {
    userList: state.userReducer.userList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserList: () => dispatch(getUserList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
