// AdminScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import {
  Card,
  Button,
  ButtonText,
  GluestackUIProvider,
  Heading,
  Text,
  HStack,
  VStack,
  Box,
  
} from '@gluestack-ui/themed';
import { getAllUsers, deleteUser } from '../database/database';
import {config} from '@gluestack-ui/config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Admin_userList from './Admin_userList';
import Signup from './Signup';

const Tab = createBottomTabNavigator();


export default function Admin() {
return(
    <Tab.Navigator>
    <Tab.Screen name="User list" component={Admin_userList} options={{headerShown: false}}/>
    <Tab.Screen name="Singnup" component={Signup} />
    
  </Tab.Navigator>
)
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
});
