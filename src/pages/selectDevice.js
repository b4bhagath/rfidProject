import React from 'react';
import {StyleSheet, View, Text, SectionList} from 'react-native';

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
        // {
        //   title: 'Bonded Device List',
        //   data: {
        //     device: ['Poco Phone', 'Asus Max'],
        //     deviceID: ['10:102:122:33', '112:102:92:1'],
        //     class: ['123', '34565'],
        //     bond: ['10', '10'],
        //     Duration: ['145ms', '125ms'],
        //     Rssi: ['-112dBm', '-71dBm'],
        //   },
        // },
      ],
    };
  }

  static navigationOptions = {
    title: 'Select Device',
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
        <View />
        <View style={styles.c1}>
          <Text style={styles.c1TextBox}>Bluetooth Devices</Text>
        </View>
        <View>
          <SectionList
            sections={this.state.devices}
            renderItem={({item}) => {
              return (
                <View style={styles.slDeviceList}>
                  <View style={styles.deviceListBlock}>
                    <View style={styles.device}>
                      <Text style={styles.item}>{item}</Text>
                    </View>
                    <View style={styles.deviceID}>
                      <Text>10:102:122:33</Text>
                    </View>
                  </View>
                  <View style={styles.deviceListBlock}>
                    <View style={styles.class}>
                      <Text>123</Text>
                    </View>
                    <View style={styles.bond}>
                      <Text>10</Text>
                    </View>
                    <View style={styles.duration}>
                      <Text>145ms</Text>
                    </View>
                    <View style={styles.rssi}>
                      <Text>112dBm</Text>
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
    backgroundColor: '#45A6D9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  c1TextBox: {
    color: 'white',
    // fontSize: 16,
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
  slDeviceList: {},
  deviceListBlock: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
