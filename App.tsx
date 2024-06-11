import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './src/screens/Signup';
import {initDatabase} from './src/database/database';
import Home from './src/screens/Home';
import {AuthProvider} from './src/contexts/AuthContext';
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
