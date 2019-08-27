import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deText}>DE</Text>
        </View>

        <View>
          <View>
            <Text style={styles.loggedInText}>Logged in as</Text>
          </View>
          <View>
            <Text style={styles.user}>Rahul Yadav</Text>
          </View>
        </View>

        <View>
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 30, height: 30}}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loggedInText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  user: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
