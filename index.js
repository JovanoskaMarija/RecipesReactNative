/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Test from './components/Test/Test'
import App from './components/App/index.js'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
