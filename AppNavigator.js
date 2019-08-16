import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from './src/pages/loginPage.js';
import Home from './src/pages/homeScreen.js';

const AppNavigator = createStackNavigator({
  Login: {screen: Login},
  Home: {screen: Home},
});

// const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
