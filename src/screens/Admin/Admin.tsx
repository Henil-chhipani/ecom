// AdminScreen.js
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, FlatList, SafeAreaView} from 'react-native';
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
  Icon,
  MenuIcon,
  AddIcon,
} from '@gluestack-ui/themed';
import {getAllUsers, deleteUser} from '../../database/database';
import {config} from '@gluestack-ui/config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Admin_userList from './Admin_userList';
import Signup from '../Signup';
import Add_product from './Add_product';
import AdminProductList from './AdminProductList';
import {useAuth} from '../../contexts/AuthContext'

const Tab = createBottomTabNavigator();

export default function Admin({navigation}:any) {

  const { logout } = useAuth();

  const logoutPress = async()=>{
      logout();
navigation.replace('Login');
      
  }

  return (
    <SafeAreaView style={{flex:1}}>
   <Button onPress={logoutPress} width={100} margin={10} alignSelf="flex-end">
    <ButtonText>Logout</ButtonText>
  </Button>
    <Tab.Navigator>
      <Tab.Screen
        name="User list"
        component={Admin_userList}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon as={MenuIcon} size="md" color="skyblue" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Add product"
        component={Add_product}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon as={AddIcon} size="md" color="skyblue" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Product List"
        component={AdminProductList}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon as={MenuIcon} size="md" color="skyblue" />
          ),
        }}
      />
    </Tab.Navigator>
    </SafeAreaView>
  );
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
