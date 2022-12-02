import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
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
  }

  render() {
    return (
      <SafeAreaView style={styles.topView}>
        <Text style={styles.titleText}>Users -</Text>
        <FlatList
          scrollEnabled={true}
          data={this.props?.userList}
          renderItem={({item}) => {
            console.log('item.id', item.id);
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
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 20,
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
