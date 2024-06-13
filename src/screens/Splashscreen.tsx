import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
// import {} from '../../assets/icon.jpg'
import {useAuth} from '../../src/contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {admins} from './Login';
export default function Splashscreen({navigation}: any) {
  const {user} = useAuth();

  useEffect(() => {
    setTimeout(async () => {
      const userData = await AsyncStorage.getItem('user');

      if (userData) {
        const user = JSON.parse(userData);
        if (admins.includes(user.email)) {
          navigation.replace('Admin');
        } else {
          navigation.replace('Home');
        }
      } else {
        navigation.replace('Login');
        console.log('Splash');
      }
    }, 3000);

    console.log('gfhdsfg');
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.jpg')} style={styles.logo} />
      <Text style={styles.title}>My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
