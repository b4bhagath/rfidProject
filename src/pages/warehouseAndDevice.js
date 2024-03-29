/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableHighlight,
  Image,
} from 'react-native';
import FixedHeader from '../components/fixedHeader.js';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class Warehouse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      warehouse: '0',
      warehouseList: [],
      isWarehouseSelected: true,
      deviceSelected: true,
      isDeviceSelected: false,
    };
  }
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      headerTitle: <FixedHeader />,
      headerLeft: null,
    };
  };

  selectProcess() {
    console.log('warehouse is selected');
    console.log(this.state.isWarehouseSelected, this.state.deviceSelected);
    if (this.state.isWarehouseSelected && this.state.deviceSelected) {
      console.log('Next page plz');
      this.storeData({key: '@warehouse', value: this.state.warehouse});
      this.props.navigation.navigate('HuSelectionScreen');
    }
  }

  storeData = async data => {
    try {
      await AsyncStorage.setItem(data.key, data.value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  scanForDevice() {
    console.log('Scan for device');
    this.props.navigation.navigate('BluetoothDevice');
  }

  componentDidMount() {
    console.log('componentWillMount');
    // let warehouse = [];
    // eslint-disable-next-line consistent-this
    let scope = this;
    fetch('http://192.168.43.175/decathlon/public/admin/warehouse_list/qw24ad')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        scope.setState({warehouseList: responseJson.data});
      })
      .catch(error => {
        console.error(error);
        alert('count not load warehouse api');
      });
  }
  render() {
    const verifiedLogo = (
      <Icon name="md-checkmark-circle" color="#32CD32" size={25} />
    );
    return (
      <View style={styles.wrapper}>
        <View style={styles.c1}>
          <View style={styles.block}>
            <View style={styles.blockLogo}>
              {this.state.warehouse === '0' ? null : verifiedLogo}
            </View>
            <View>
              <View style={{height: 40, paddingTop: 10}}>
                <Text style={{color: 'white'}}>Select Warehouse</Text>
              </View>
              <View style={{height: 40}}>
                <Picker
                  selectedValue={this.state.warehouse}
                  style={styles.picker}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({warehouse: itemValue});
                    this.setState({isWarehouseSelected: true});
                  }}>
                  <Picker.Item label=" - Select - " value="0" />
                  {/* {console.log('rendering pricker', this.state.warehouseList)} */}
                  {this.state.warehouseList.map((value, index) => {
                    console.log('value inside forloop', value);
                    return (
                      <Picker.Item
                        key={index}
                        label={value.WH_NAME}
                        value={value.WH_id}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.c2}>
          <View style={styles.block}>
            <View style={styles.blockLogo}>
              {this.state.isDeviceSelected === false ? null : verifiedLogo}
            </View>
            <View>
              <View style={{height: 40, paddingTop: 10}}>
                <Text style={{color: 'white'}}>Select Device</Text>
              </View>
              <View>
                <TouchableHighlight
                  style={styles.scanBlock}
                  onPress={this.scanForDevice.bind(this)}>
                  <Text style={styles.scanText}>- Scan For Device -</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.c3}>
          <TouchableHighlight
            onPress={this.selectProcess.bind(this)}
            elevation={2}>
            <View style={styles.c3SaveButton}>
              <Text style={styles.c3SaveButtonText}>Next</Text>
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    display: 'flex',
    width: 300,
    // borderWidth: 2,
    backgroundColor: '#258CC8',
    borderRadius: 4,
    // width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 40,
  },
  blockLogo: {
    width: 200,
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  picker: {
    color: 'white',
    width: 240,
    height: 30,
    flexDirection: 'column',
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  c2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
    // backgroundColor: 'red',
    width: 240,
  },
  scanText: {
    color: 'white',
    fontSize: 15,
  },
  c3: {
    // backgroundColor: 'red',
    margin: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', //replace with flex-end or center
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
