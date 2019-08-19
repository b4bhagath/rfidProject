/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#45A6D9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
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

    if (username) Alert.alert('Logged in Succesfully', `${username} + ${password}`);
    else Alert.alert('Logged in Succesfully');
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card} elevation={3}>
          <View style={styles.topDecImage}>
            {/* <Text>Hello World</Text> */}
          </View>
          {/* <View> */}
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', height: 100}}
            source={require('../../assests/img/5a1d2fbc4ac6b00ff574e29a.png')}
            styles={styles.image}
          />
          {/* </View> */}
          <View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholderTextColor={'white'}
                value={this.state.username}
                onChangeText={username => this.setState({username})}
                placeholder={'Username'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholderTextColor={'white'}
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
              />
            </View>
            <TouchableHighlight onPress={this.onLogin.bind(this)}>
              <View style={styles.loginButton} onMagicTap elevation={2}>
                <Text style={styles.loginButtonText}>SIGN ON</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.section3}>
            <View>
              <Text style={{color: 'white'}}> Help </Text>
            </View>
            <View>
              <Text style={{color: 'white'}}>Languages</Text>
            </View>
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
    flex: 1,
    position: 'absolute',
    top: 0,
  },
  input: {
    width: 300,
    height: 44,
    color: 'white',
  },
  loginButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    display: 'flex',
  },
  loginButtonText: {
    color: '#45A6D9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerWrapper: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    // marginBottom: 30,
  },
  card: {
    borderRadius: 2,
    // display: 'inline-block',
    backgroundColor: '#45A6D9',
    height: 500,
    width: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 2,
    padding: 50,
    overflow: 'hidden',
  },
  inputStyle: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    // padding: 10,
    marginBottom: 10,
  },
  inputButton: {
    paddingTop: 20,
    marginTop: 10,
  },
  section3: {
    marginTop: 20,
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  topDecImage: {
    bottom: 350,
    height: 300,
    width: 850,
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    position: 'absolute',
    transform: [{rotate: '-17deg'}],
  },
});
