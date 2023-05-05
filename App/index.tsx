/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import MainNavigator from './navigation/navigator/MainNavigator';

const Index = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default Index;
