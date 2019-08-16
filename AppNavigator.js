import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from './src/pages/loginPage.js';

const AppNavigator = createStackNavigator({
  Login: {screen: Login},
});

// const AppNavigator = createStackNavigator(...);

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer;
