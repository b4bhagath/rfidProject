import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from './src/pages/loginPage.js';
import Home from './src/pages/processScreen.js';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
});

// const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
