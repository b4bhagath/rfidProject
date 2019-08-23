import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from './src/pages/loginPage.js';
import Home from './src/pages/processScreen.js';
import Ecommerce from './src/pages/ecommerceScreen.js';
import Warehouse from './src/pages/warehouseScreen.js';
import ConnectRFID from './src/pages/connectRfid.js';
import SelectDevice from './src/pages/selectDevice.js';

const AppNavigator = createStackNavigator({
  Selectdevice: {screen: SelectDevice},
  Login: {screen: Login},
  Home: {screen: Home},
  Ecommerce: {screen: Ecommerce},
  Warehouse: {screen: Warehouse},
  Connectrfid: {screen: ConnectRFID},
});

// const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
