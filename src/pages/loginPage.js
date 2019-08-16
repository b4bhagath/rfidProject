import React from 'react';
import {Alert, Button, TextInput, View, StyleSheet, Image} from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const {username, password} = this.state;
    console.log('this.state', this.state);

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card} elevation={3}>
          {/* <View> */}
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', height: 100}}
            source={require('../../assests/img/5a1d2fbc4ac6b00ff574e29a.png')}
            styles={styles.image}
          />
          {/* </View> */}
          <View>
            <TextInput
              value={this.state.username}
              onChangeText={username => this.setState({username})}
              placeholder={'Username'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />

            <Button
              title={'Login'}
              style={styles.input}
              onPress={this.onLogin.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  image: {
    // display: 'flex',
    // justifyContent: 'flex-start'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  headerWrapper: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    // marginBottom: 30,
  },
  card: {
    borderRadius: 2,
    // display: 'inline-block',
    height: 600,
    width: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 50,
  },
});
