import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class Friends extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      process: 'ecommerce',
    };
  }

  static navigationOptions = {
    title: 'Select the process',
    headerStyle: {
      backgroundColor: '#45A6D9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  selectProcess() {
    console.log('process is selected', this.state);
    const {process} = this.state;

    if (process === 'ecommerce') {
      Alert.alert(`${process}` + ' is selected');
      this.props.navigation.navigate('Ecommerce');
    } else if (process === 'warehouse') {
      Alert.alert(`${process}` + ' is selected');
      this.props.navigation.navigate('Warehouse');
    } else {
      Alert.alert('Please select a process');
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.c1}>
          {/* <View style={[styles.box, styles.box1]} />
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} /> */}
          <View style={styles.c1block}>
            <View style={styles.c1blockLogo}>
              <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={{width: 30, height: 30}}
                source={{
                  uri:
                    'https://facebook.github.io/react-native/img/tiny_logo.png',
                }}
              />
            </View>
            <View>
              <Picker
                selectedValue={this.state.process}
                style={styles.c1Picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({process: itemValue})
                }>
                <Picker.Item label="Warehouse" value="warehouse" />
                <Picker.Item label="Ecommerce" value="ecommerce" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.c2}>
          <TouchableHighlight
            onPress={this.selectProcess.bind(this)}
            elevation={2}>
            <View style={styles.c2SaveButton}>
              <Text style={styles.c2SaveButtonText}>Save</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#45A6D9',
  },
  c1: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center', //replace with flex-end or center
    // borderBottomWidth: 1,
    // borderBottomColor: '#000',
  },
  c1block: {
    display: 'flex',
    width: 300,
    // borderWidth: 2,
    backgroundColor: '#258CC8',
    borderRadius: 4,
    // width: '100%',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 40,
  },
  c1blockLogo: {
    // backgroundColor: 'red',
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  c1Picker: {
    color: 'white',
    width: 250,
    height: '100%',
    flexDirection: 'column',
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  c2: {
    // backgroundColor: 'red',
    margin: 50,
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', //replace with flex-end or center
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#45A6D9',
  //   alignItems: 'center',
  //   // justifyContent: 'center',
  // },
  // s1: {
  //   flex: 1,
  // },
  // s1Block: {
  //   flexDirection: 'column',
  //   marginHorizontal: 40,
  //   marginVertical: 40,
  //   width: '100%',
  //   height: 40,
  //   backgroundColor: '#258CC8',
  // },
  // c2: {
  //   backgroundColor: 'red',
  //   flex: 1,
  // },
  c2SaveButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    // display: 'flex',
  },
  c2SaveButtonText: {
    color: '#45A6D9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  c2Button: {
    color: 'white',
  },
});
