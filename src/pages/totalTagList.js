import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import FixedHeader from '../components/fixedHeader.js';
import Icon from 'react-native-vector-icons/Ionicons';
let faker = require('faker');
import AsyncStorage from '@react-native-community/async-storage';

export default class TotalTagList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      process: 'ecommerce',
      playPause: 'md-play',
      tagLists: [
        {
          image: this.getrandomImage(),
          name:
            'Philips QP2525/10 OneBlade Hybrid Trimmer and Shaver with 3 Trimming Combs (Lime Green)',
          quantity: '3',
        },
        {
          image: this.getrandomImage(),
          name: 'Philips BG1025/15 Showerproof Body Groomer for Men',
          quantity: '1',
        },
        {
          image: this.getrandomImage(),
          name: 'Mi Beard Trimmer (Black)',
          quantity: '1',
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
  componentDidMount() {
    this.getEpcToEanApi('30395DFA800A9740001E1EAE')
      .then(resp => {
        if (resp.status) {
          console.log('Epc to Ean Converted', resp.eanCode);

          this.getAccessToken('@access_token')
            .then(accessTokenresp => {
              console.log('accessTokenresp received');

              this.getEanToItemCode([resp.eanCode, accessTokenresp])
                .then(itemCoderesp => {
                  console.log('itemCoderesp', itemCoderesp);
                  this.getProductDetails(['8506080', accessTokenresp])
                    .then(productDetailsResp => {
                      console.log(productDetailsResp);
                    })
                    .catch(error => {
                      console.log('getProductDetails error', error);
                    });
                })
                .catch(error => {
                  console.log('getEanToItemCode error', error);
                });
            })
            .catch(error => {
              console.log('getAccessToken error', error);
            });
        }
      })
      .catch(error => {
        console.log('getEpcToEanApi error', error);
      });
  }

  getProductDetails(data) {
    const accessToken = data[1];
    const itemCode = data[0];
    console.log(accessToken);

    return fetch(
      `https://api-eu.preprod.decathlon.net/spid/v2/models?draft=false&state=CURRENT&modelCode=${itemCode}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Api-Key': '99d40149-6961-4a3c-89bd-cfff30ddfb81',
        },
      },
    ).then(response => response.json());
  }

  getAccessToken = async key => {
    let value = null;
    try {
      value = await AsyncStorage.getItem(key);
    } catch (e) {
      console.log(e);
      // eslint-disable-next-line no-alert
      alert('error in storing data');
    }
    return value;
  };

  getEanToItemCode(data) {
    const accessToken = data[1];
    const ean = data[0];
    return fetch(
      `https://api-eu.preprod.decathlon.net/masterdata/v2/arbo/items/search?ean=${ean}&item_type=ARTICLE`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Api-Key': 'f97b5f46-269e-4d76-91eb-5320cff067a7',
        },
      },
    ).then(response => response.json());
  }

  getEpcToEanApi(epc) {
    let url = `http://192.168.43.219:8080/epctoean/api/v1/epc/${epc}`;
    console.log(url);
    return fetch(url).then(response => response.json());
  }

  getrandomImage() {
    return faker.image.image();
  }

  getListOfTags() {
    let rows = [];
    console.log('Number of tags', this.state.tagLists.length);

    for (let i = 0; i < this.state.tagLists.length; i++) {
      rows.push(
        <View style={styles.c2Block} key={i}>
          <View style={styles.c2BLockImage}>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 75, height: 75}}
              source={{uri: this.state.tagLists[i].image}}
            />
          </View>
          <View style={styles.c2TagsDesc}>
            <View>
              <Text>{this.state.tagLists[i].name}</Text>
            </View>
            <View>
              <Text>QTY: {this.state.tagLists[i].quantity}</Text>
            </View>
          </View>
        </View>,
      );
    }
    return rows;
  }

  startOrStop() {
    console.log('Changeing icon');
    if (this.state.playPause === 'md-play') {
      this.setState({playPause: 'md-pause'});
    } else {
      this.setState({playPause: 'md-play'});
    }
  }

  confirmTotalTags() {
    this.props.navigation.navigate('RfidOutput');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.section1}>
          <View style={styles.c1}>
            <View style={styles.c1Block}>
              <View>
                <Text style={styles.c1TextBox}>Total Tags Read: 10</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={this.confirmTotalTags.bind(this)}
                  elevation={2}>
                  <View style={styles.c1ConfirmButton}>
                    <Icon name="md-checkmark" color="#45A6D9" size={25} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.c2}>{this.getListOfTags()}</View>
        </View>
        <View style={styles.section2}>
          <View style={styles.c3}>
            <TouchableOpacity
              onPress={this.startOrStop.bind(this)}
              elevation={2}>
              <View style={styles.c3SaveButton}>
                <Icon name={this.state.playPause} color="#fff" size={25} />
              </View>
            </TouchableOpacity>
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
  section1: {
    flex: 10,
    // backgroundColor: 'red',
  },
  section2: {
    flex: 1,
    // backgroundColor: 'black',
  },
  c1: {
    // flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#E9E9E9',
    paddingVertical: 10,
    height: 50,
  },
  c1Block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  c1ConfirmButton: {
    paddingHorizontal: 20,
    // paddingVertical: 10,
    borderRadius: 5,
  },
  c1TextBox: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  c2Block: {
    height: 65,
    flexDirection: 'row',
    marginVertical: 20,
  },
  c2BLockImage: {
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 150,
    height: 150,
  },
  c2TagsDesc: {
    flex: 2,
    // flexDirection: 'row',
  },
  c3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  c3SaveButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#45A6D9',
    borderRadius: 5,
    // display: 'flex',
  },
});
