/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from './src/pages/SplashScreen';
import SignInPage from './src/pages/SignIn';

AppRegistry.registerComponent(appName, () => SignInPage);
