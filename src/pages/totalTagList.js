import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import FixedHeader from '../components/fixedHeader.js';

export default class TotalTagList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      process: 'ecommerce',
      tagLists: [
        {
          image: require('../../assests/img/greenTrimmer.jpg'),
          name:
            'Philips QP2525/10 OneBlade Hybrid Trimmer and Shaver with 3 Trimming Combs (Lime Green)',
          quantity: '3',
        },
        {
          image: require('../../assests/img/blueTrimmer.jpg'),
          name: 'Philips BG1025/15 Showerproof Body Groomer for Men',
          quantity: '1',
        },
        {
          image: require('../../assests/img/blackTrimmer.jpg'),
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
  getListOfTags() {
    let rows = [];
    console.log('Number of tags', this.state.tagLists.length);

    for (let i = 0; i < this.state.tagLists.length; i++) {
      // note: we add a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(
        <View style={styles.c2Block} key={i}>
          <View style={styles.c2BLockImage}>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 75, height: 75}}
              source={this.state.tagLists[i].image}
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

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.section1}>
          <View style={styles.c1}>
            <Text style={styles.c1TextBox}>Total Tags Read: 10</Text>
          </View>
          <View style={styles.c2}>{this.getListOfTags()}</View>
        </View>
        <View style={styles.section2}>
          <View style={styles.c3}>
            <Image
              style={{width: 30, height: 30}}
              source={{
                uri:
                  'https://facebook.github.io/react-native/img/tiny_logo.png',
              }}
            />
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
    backgroundColor: '#E9E9E9',
    paddingVertical: 10,
    height: 50,
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
});
