import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from './src/pages/loginPage.js';
import WarehouseAndDevice from './src/pages/warehouseAndDevice.js';
import BluetoothDevice from './src/pages/bluetoothDevices.js';
import HuSelectionScreen from './src/pages/huSelectionScreen.js';
import totalTags from './src/pages/totalTagList.js';
// import ConnectRFID from './src/pages/connectRfid.js';

// const AppNavigator = createStackNavigator({
// });

const RootStack = createStackNavigator(
  {
    Login: {screen: Login},
    WarehouseAndDevice: {screen: WarehouseAndDevice},
    BluetoothDevice: {screen: BluetoothDevice},
    HuSelectionScreen: {screen: HuSelectionScreen},
    TotalTags: {screen: totalTags},
    // Connectrfid: {screen: ConnectRFID},
  },
  {
    initialRouteName: 'TotalTags',
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
