import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';
import FixedHeader from '../components/fixedHeader.js';

export default class HuSelectionScreen extends React.Component {
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
    // fetch('http://192.168.43.175/decathlon/public/admin/warehouse_list/qw24ad')
    //   .then(response => response.json())
    //   .then(resp => {
    //     console.log(resp);
    //     this.props.navigation.navigate('TotalTags');
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     alert('count not load warehouse api');
    //   });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.c1}>
          <TextInput
            style={styles.huInuputText}
            onChangeText={text => this.setState({huText: text})}
            value={this.state.huText}
            placeholder={'Enter HU Number'}
            placeholderTextColor={'white'}
          />
        </View>
        <View>
          <TouchableHighlight onPress={this.startScan.bind(this)} elevation={2}>
            <View style={styles.c3SaveButton}>
              <Text style={styles.c3SaveButtonText}>Start Scan</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  c1: {
    width: 200,
    justifyContent: 'center',
    // backgroundColor: 'red',
    marginBottom: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  huInuputText: {
    height: 44,
    color: 'white',
  },
  c3SaveButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    // display: 'flex',
  },
  c3SaveButtonText: {
    color: '#45A6D9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  c3Button: {
    color: 'white',
  },
});
