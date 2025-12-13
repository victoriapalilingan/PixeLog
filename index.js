/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from './src/pages/SplashScreen';
import SignInPage from './src/pages/SignIn';
import SignUpPage from './src/pages/SignUp';
import HomeScreen from './src/pages/Home';

AppRegistry.registerComponent(appName, () => HomeScreen);
