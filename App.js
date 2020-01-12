/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Home from './components/Home'

const App: () => React$Node = () => {
  return (
    <View>
      <Text>Maca </Text>
      <Home />
    </View>
  );
};


export default App;
