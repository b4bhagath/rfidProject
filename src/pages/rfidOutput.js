/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';
import FixedHeader from '../components/fixedHeader.js';

export default class RfidOutput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      process: 'warehouse',
      huText: '',
    };
  }

  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      headerTitle: <FixedHeader />,
      headerLeft: null,
    };
  };

  startScan() {
    console.log('startScan');
    this.props.navigation.navigate('TotalTags');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.c1}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 10,
              marginBottom: 5,
              borderColor: 'green',
              borderWidth: 2,
              borderRadius: 5,
              padding: 5,
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', fontWeight: 'bold'}}>
              <Text style={{fontSize: 20}}>With RFID</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{paddingBottom: 10}}>
                <Text style={{fontSize: 12}}>Expected Qtys</Text>
              </View>
              <View>
                <Text style={{fontSize: 16}}>6</Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{paddingBottom: 10}}>
                <Text style={{fontSize: 12}}>Actual Qtys</Text>
              </View>
              <View>
                <Text style={{fontSize: 16}}>6</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 10,
              marginBottom: 5,
              borderColor: 'red',
              borderWidth: 2,
              borderRadius: 5,
              padding: 5,
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', fontWeight: 'bold'}}>
              <Text style={{fontSize: 20}}>Discrepancy</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{paddingBottom: 10}}>
                <Text style={{fontSize: 12}}>Excess Qtys</Text>
              </View>
              <View>
                <Text style={{fontSize: 16}}>0</Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{paddingBottom: 10}}>
                <Text style={{fontSize: 12}}>Short Qtys</Text>
              </View>
              <View>
                <Text style={{fontSize: 16}}>0</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 10,
              marginBottom: 5,
              borderColor: 'yellow',
              borderWidth: 2,
              borderRadius: 5,
              padding: 5,
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', fontWeight: 'bold'}}>
              <Text style={{fontSize: 20}}>No RFID</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}} />
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{paddingBottom: 10}}>
                <Text style={{fontSize: 12}}>Expected Qtys</Text>
              </View>
              <View>
                <Text style={{fontSize: 16}}>0</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 2}} />
        {/* <View>
          <TouchableHighlight onPress={this.startScan.bind(this)} elevation={2}>
            <View style={styles.c3SaveButton}>
              <Text style={styles.c3SaveButtonText}>Start Scan</Text>
            </View>
          </TouchableHighlight>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  c1: {
    flex: 1,
    // flexDirection: '',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 30,
    // backgroundColor: 'green',
    // borderWidth: 2,
    // borderRadius: 5,
  },
});
