import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './src/screens/Signup';
import {initDatabase,get} from './src/database/database';
import Home from './src/screens/User/Home';
import {AuthProvider} from './src/contexts/AuthContext';
import Admin from './src/screens/Admin/Admin';
import Splashscreen from './src/screens/Splashscreen';
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initDatabase();
    
    

    
  }, []);

  return (
    <View style={{flex: 1}}>

        <AuthProvider >
    <NavigationContainer>
          
        <Stack.Navigator initialRouteName="Splashscreen">
          <Stack.Screen
            name="Splashscreen"
            component={Splashscreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Admin"
            component={Admin}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
    </View>
  );
}
