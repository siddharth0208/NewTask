import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import UserComponent from '../Component/UserComponent';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    let self = this;
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        console.log('data', response.data);
        self.setState({user: response.data});
        console.log('user', self.state.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.topView}>
        <Text style={styles.titleText}>Users -</Text>
        <FlatList
          scrollEnabled={true}
          data={this.state.user}
          renderItem={item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('userDetails', {
                    id: item.item.id,
                  });
                }}>
                <UserComponent
                  id={item.item.id}
                  name={item.item.name}
                  email={item.item.email}
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
    marginTop: 20,
    marginLeft: 15,
    flex: 1,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
export default UserList;
