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

export default class HuSelectionScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      process: 'warehouse',
    };
  }

  static navigationOptions = {
    title: 'Warehouse',
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
        <Text>We got no friends</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#45A6D9',
  },
});
