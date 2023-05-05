/**
 * main navigation component to handle navigation in app.
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import main from '../../config/main';
import {Text, TouchableOpacity} from 'react-native';
import {APP_ROUTES} from '../../routes';
import styles from '../../styles';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={APP_ROUTES.PRODUCTS}
        screenOptions={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity
              style={styles.headerRight}
              onPress={() => navigation.navigate(APP_ROUTES.CART)}>
              <Text>{'Cart'}</Text>
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
        })}>
        {Object.keys(main).map(name => {
          const {component, options} = main[name];

          return (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
