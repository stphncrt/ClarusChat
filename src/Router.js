import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {Login, Sign, TimeLine} from './pages';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        {/* <Stack.Screen name="TimeLine" component={TimeLine} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
