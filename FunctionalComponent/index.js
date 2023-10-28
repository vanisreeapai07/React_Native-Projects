/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Login from './src/login';
import fetch from './src/fetch';

AppRegistry.registerComponent(appName, () => App);
