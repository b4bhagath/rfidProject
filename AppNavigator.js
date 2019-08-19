import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from './src/pages/loginPage.js';
import Home from './src/pages/processScreen.js';
import Ecommerce from './src/pages/ecommerceScreen.js';
import Warehouse from './src/pages/warehouseScreen.js';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  Ecommerce: {screen: Ecommerce},
  Warehouse: {screen: Warehouse},
});

// const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
