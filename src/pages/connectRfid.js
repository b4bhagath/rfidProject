import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

export default class ConnectRfid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      process: 'ecommerce',
    };
  }

  static navigationOptions = {
    title: 'Connect to RFID Scanner',
    headerStyle: {
      backgroundColor: '#45A6D9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.c1}>
          <View>
            <Text style={styles.c1TextBox1}>Devices Found</Text>
          </View>
          <View>
            <ActivityIndicator
              style={styles.c1TextBox}
              size="large"
              color="white"
            />
          </View>
          <View>
            <Text style={styles.c1TextBox2}>Scan Again</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  redBG: {
    backgroundColor: 'red',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#45A6D9',
  },

  c1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  c1TextBox: {
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  c1TextBox1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  c1TextBox2: {
    color: 'white',
    fontSize: 16,
    // fontWeight: 'bold',
    marginRight: 20,
  },
});
