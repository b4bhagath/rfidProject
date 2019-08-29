import React from 'react';
import {StyleSheet, View, Text, Image, SectionList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FixedHeader from '../components/fixedHeader.js';

export default class ConnectRfid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      devices: [
        {
          title: 'Bluetooth Devices',
          data: ['Poco Phone', 'Asus Max'],
          // data: {
          //   device: ['Poco Phone', 'Asus Max'],
          //   deviceID: ['10:102:122:33', '112:102:92:1'],
          //   class: ['123', '34565'],
          //   bond: ['10', '10'],
          //   Duration: ['145ms', '125ms'],
          //   Rssi: ['-112dBm', '-71dBm'],
          // },
        },
        {
          title: 'Bonded Device List',
          data: ['Poco1 Phone', 'Asus Max'],
        },
      ],
    };
  }

  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      headerTitle: <FixedHeader />,
      headerLeft: null,
    };
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.c1}>
          <View>
            <Icon name="md-refresh" color="#32CD32" size={25} />
          </View>
          <View>
            <Text style={styles.c1TextBox}>Scan for Devices</Text>
          </View>
        </View>
        <View>
          <SectionList
            sections={this.state.devices}
            renderItem={({item}) => {
              return (
                <View style={styles.slDeviceList}>
                  <View style={styles.deviceListBlock}>
                    <View style={styles.device}>
                      <Text>{item}</Text>
                    </View>
                    <View style={styles.deviceID}>
                      <Text>10:102:122:33</Text>
                    </View>
                  </View>
                  <View style={styles.deviceListBlock}>
                    <View style={styles.class}>
                      <Text style={styles.smallFontSize}>123</Text>
                    </View>
                    <View style={styles.bond}>
                      <Text style={styles.smallFontSize}>10</Text>
                    </View>
                    <View style={styles.duration}>
                      <Text style={styles.smallFontSize}>145ms</Text>
                    </View>
                    <View style={styles.rssi}>
                      <Text style={styles.smallFontSize}>112dBm</Text>
                    </View>
                  </View>
                </View>
              );
            }}
            renderSectionHeader={({section}) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
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
  },

  c1: {
    display: 'flex',
    backgroundColor: 'rgba(247,247,247,1.0)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  c1TextBox: {
    color: '#45A6D9',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  c1TextBox1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  sectionHeader: {
    marginHorizontal: 10,
    paddingVertical: 30,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    // padding: 10,
    fontSize: 12,
    height: 35,
  },
  smallFontSize: {
    fontSize: 12,
    color: '#C6C6C6',
  },
  slDeviceList: {
    marginHorizontal: 10,
    borderBottomColor: '#C6C6C6',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
  },
  deviceListBlock: {
    // marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
