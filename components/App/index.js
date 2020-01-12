import React from 'react';
import Wrapper from '../Wrapper/index';
import Test from '../Test';
import {Provider} from 'react-redux';
import {NativeRouter} from 'react-router-native';
// import store from '../../store/store';
import {store} from '../../store/index';
import {View} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Wrapper />
          {/* <Test /> */}
        </NativeRouter>
      </Provider>
    );
  }
}

export default App;
