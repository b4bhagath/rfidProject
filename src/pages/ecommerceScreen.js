import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class WarehouseScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      process: 'ecommerce',
    };
  }

  static navigationOptions = {
    title: 'Ecommerce',
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
          <Text style={styles.c1TextBox}>Secure Products</Text>
        </View>
        <View style={styles.c2}>
          <View style={styles.c2Block}>
            <View>
              <Text style={styles.c2BlockTexts}>Logged in as</Text>
            </View>
            <View>
              <Text style={styles.c2BlockTexts}>RYADAV16</Text>
            </View>
            {/* <View style={styles.c2AppVersion}>
              <Text style={styles.c2AppVersionText}>App Version: 1.22</Text>
            </View> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  c1: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center', //replace with flex-end or center
    alignItems: 'flex-end',
    // borderBottomWidth: 1,
    // borderBottomColor: '#000',
    paddingBottom: 30,
  },
  c1TextBox: {
    borderColor: 'black',
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 10,
    // backgroundColor: 'red',
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  c2: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end', //replace with flex-end or center
    paddingBottom: 50,
  },
  c2Block: {
    display: 'flex',
    fontWeight: 'bold',
  },
  c2BlockTexts: {
    fontSize: 18,
    textAlign: 'center',
  },
  //   c2AppVersion: {
  //     backgroundColor: 'red',
  //     width: '100%',
  //   },
  //   c2AppVersionText: {
  //     // display: 'flex',
  //     justifyContent: 'flex-end',
  //     textAlign: 'right',
  //   },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#2196F3',
  },
  box2: {
    backgroundColor: '#8BC34A',
  },
  box3: {
    backgroundColor: '#e3aa1a',
  },
});
