/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, View, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      header: null,
    };
  };
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      urlReceived: false,
      loginLoader: false,
    };
  }

  handleWebViewNavigationStateChange = newNavState => {
    console.log(newNavState);
    const {url} = newNavState;
    if (!url) {
      return;
    }

    // console.log(this.webview);

    if (url.includes('https://warehouseppm.decathlonin.net/')) {
      this.setState({urlReceived: true});
      this.setState({loginLoader: true});

      let code = url.split('code=')[1];
      console.log(this.state.urlReceived);
      if (!this.state.urlReceived) {
        this.getAccessTokenApi(code)
          .then(resp => {
            console.log('Authorization resp', resp);
            this.storeData({key: '@access_token', value: resp.access_token});
            this.setState({urlReceived: false});
            this.props.navigation.navigate('WarehouseAndDevice');
            this.getMyValue('@access_token');
          })
          .catch(error => {
            console.error(error);
            this.setState({urlReceived: false});
          });
      }
    }
  };

  storeData = async data => {
    try {
      await AsyncStorage.setItem(data.key, data.value);
    } catch (e) {
      // saving error
    }
  };

  getAccessTokenApi(code) {
    console.log('calling getAccessTokenApi', code);
    const yourBasic =
      'QzEwNzVjOWIzYzBkZTYwNWExYzliMGE1MjU5NWE0MWEyMjM5YTNiOTY6U1lHZGcweHRIbGV6cllzQjhUQlRiTDh3eGRZRkZlMTBFbDR0bmp0UzRtc3NuZmFiWEdYV2pyR3VOcjdQVWZ4eg==';
    const clientID = 'C1075c9b3c0de605a1c9b0a52595a41a2239a3b96';
    const redirectUrl = 'https://warehouseppm.decathlonin.net';

    return fetch('https://preprod.idpdecathlon.oxylane.com/as/token.oauth2', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${yourBasic}`,
        'cache-control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        // Accept: 'application/json',
      },
      body: `grant_type=authorization_code&client_id=${clientID}&code=${code}&redirect_uri=${redirectUrl}`,
    }).then(response => response.json());
  }
  onLogin() {
    const {username, password} = this.state;
    console.log('this.state', this.state);

    if (username) {
      Alert.alert('Logged in Succesfully', `${username} + ${password}`);
    } else {
      Alert.alert('Logged in Succesfully');
    }
    this.props.navigation.navigate('WarehouseAndDevice');
  }

  render() {
    let loaderUI = (
      <View style={{justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
    let webviewUI = (
      <WebView
        style={{height: '100%', flex: 1}}
        onNavigationStateChange={this.handleWebViewNavigationStateChange.bind(
          this,
        )}
        ref={ref => (this.webview = ref)}
        source={{
          uri:
            'https://preprod.idpdecathlon.oxylane.com/as/authorization.oauth2?client_id=C1075c9b3c0de605a1c9b0a52595a41a2239a3b96&response_type=code&redirect_uri=https://warehouseppm.decathlonin.net&scope=openid profile email',
        }}
      />
    );
    let loaderStyle = {flex: 1, justifyContent: 'center'};
    return (
      <View style={this.state.loginLoader === true ? loaderStyle : {flex: 1}}>
        {this.state.loginLoader === true ? loaderUI : webviewUI}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
