/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Picker, TouchableHighlight} from 'react-native';
import FixedHeader from '../components/fixedHeader.js';

export default class RfidOutput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      process: 'warehouse',
      huText: null,
      withRfidExpectedQty: 0,
      withRfidActualQty: 0,
      excessQty: 0,
      shortQty: 0,
      withNoRfidExpectedQty: 0,
      errorCode: [],
    };
  }

  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      headerTitle: <FixedHeader />,
      headerLeft: null,
    };
  };

  submitError() {
    console.log('submitError');
    fetch('http://192.168.43.175/decathlon/public/api/v1/submit_error_code', {
      method: 'POST',
      body: {},
    })
      .then(response => response.json())
      .then(() => {
        alert('Submitted Sccessfully');
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    console.log('componentDidMount');

    this.outputAndErrorApi().then(resp => {
      this.setState({
        withRfidExpectedQty: resp.data[0].result_total_expected_quantity,
      });

      this.setState({
        withRfidActualQty: resp.data[0].result_total_actual_quantity,
      });

      this.setState({excessQty: resp.data[0].total_excess_quantity});
      this.setState({shortQty: resp.data[0].total_short_quantity});

      this.setState({errorCode: resp.data[0].error_codes});
    });
  }

  outputAndErrorApi() {
    // this.getAccessToken('@warehouse').then(resp => {
    //   console.log('warehouse id', resp);

    //   let data = Object.assign({
    //     hu_number: 'DRHTFH3453',
    //     warehouse_id: resp,
    //     item_details: this.state.productList,
    //     // total_quantiy: this.getTotalquantity(),
    //   });
    //   console.log(data);
    //   console.log(JSON.stringify(data));
    // });
    return fetch(
      'http://192.168.43.175/decathlon/public/admin/scan_save/DRHTFH3453/IN01',
    ).then(response => response.json());
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
                <Text style={{fontSize: 16}}>
                  {this.state.withRfidExpectedQty}
                </Text>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{paddingBottom: 10}}>
                <Text style={{fontSize: 12}}>Actual Qtys</Text>
              </View>
              <View>
                <Text style={{fontSize: 16}}>
                  {this.state.withRfidActualQty}
                </Text>
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
              <View style={{flex: 1, flexDirection: 'row', width: 50}}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 16}}>{this.state.excessQty}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Picker
                    selectedValue={this.state.warehouse}
                    style={styles.picker}
                    mode={'dropdown'}
                    onValueChange={(itemValue, itemIndex) => {
                      this.setState({warehouse: itemValue});
                      this.setState({isWarehouseSelected: true});
                    }}>
                    <Picker.Item label=" - Select - " value="0" />
                    {/* {console.log('rendering pricker', this.state.warehouseList)}
                    {this.state.warehouseList.map((value, index) => {
                      console.log('value inside forloop', value);
                      return (
                        <Picker.Item
                          key={index}
                          label={value.WH_NAME}
                          value={value.WH_NAME}
                        />
                      );
                    })} */}
                  </Picker>
                </View>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{paddingBottom: 10}}>
                <Text style={{fontSize: 12}}>Short Qtys</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', width: 50}}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 16}}>{this.state.shortQty}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  <Picker
                    selectedValue={this.state.warehouse}
                    style={styles.picker}
                    mode={'dropdown'}
                    onValueChange={(itemValue, itemIndex) => {
                      this.setState({warehouse: itemValue});
                      this.setState({isWarehouseSelected: true});
                    }}>
                    <Picker.Item label=" - Select - " value="0" />
                    {/* {console.log('rendering pricker', this.state.warehouseList)}
                    {this.state.warehouseList.map((value, index) => {
                      console.log('value inside forloop', value);
                      return (
                        <Picker.Item
                          key={index}
                          label={value.WH_NAME}
                          value={value.WH_NAME}
                        />
                      );
                    })} */}
                  </Picker>
                </View>
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
                <Text style={{fontSize: 16}}>
                  {this.state.withNoRfidExpectedQty}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.errorDropdown}>
            <Picker
              selectedValue={this.state.warehouse}
              style={styles.picker}
              mode={'dropdown'}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({warehouse: itemValue});
                this.setState({isWarehouseSelected: true});
              }}>
              <Picker.Item label=" - Error List - " value="0" />
              {/* {console.log('rendering pricker', this.state.warehouseList)} */}
              {this.state.errorCode.map((value, index) => {
                console.log('value inside forloop', value);
                return (
                  <Picker.Item
                    key={index}
                    label={value.error_code}
                    value={value.error_code}
                  />
                );
              })}
            </Picker>
          </View>
          <View>
            <TouchableHighlight
              onPress={this.submitError.bind(this)}
              elevation={2}>
              <View style={styles.c3SaveButton}>
                <Text style={styles.c3SaveButtonText}>Submit</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
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
  picker: {
    padding: 20,
  },
  errorDropdown: {
    marginBottom: 20,
    width: '70%',
    // backgroundColor: 'green',
  },
  c3SaveButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#45A6D9',
    borderRadius: 5,
    marginBottom: 20,
  },
  c3SaveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
