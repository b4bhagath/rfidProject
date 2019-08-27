import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from './src/pages/loginPage.js';
import WarehouseAndDevice from './src/pages/warehouseAndDevice.js';
import BluetoothDevice from './src/pages/bluetoothDevices.js';
// import Ecommerce from './src/pages/ecommerceScreen.js';
// import Warehouse from './src/pages/warehouseScreen.js';
// import ConnectRFID from './src/pages/connectRfid.js';

// const AppNavigator = createStackNavigator({
// });

const RootStack = createStackNavigator(
  {
    Login: {screen: Login},
    WarehouseAndDevice: {screen: WarehouseAndDevice},
    BluetoothDevice: {screen: BluetoothDevice},
    // Ecommerce: {screen: Ecommerce},
    // Warehouse: {screen: Warehouse},
    // Connectrfid: {screen: ConnectRFID},
  },
  {
    initialRouteName: 'BluetoothDevice',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#45A6D9',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

// const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render

export default AppContainer;
