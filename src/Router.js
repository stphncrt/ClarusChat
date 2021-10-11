import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {Login, Sign, TimeLine} from './pages';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [hasSession, setHasSession] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setHasSession(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
<<<<<<< HEAD
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="TimeLine" component={TimeLine} />
=======
        {hasSession ? (
          <Stack.Screen name="TimeLine" component={TimeLine} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sign" component={Sign} />
          </>
        )}
>>>>>>> c387062369d43d305de4498d28a3b8f01e993c78
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
