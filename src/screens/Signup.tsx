import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  ButtonText,
  Card,
  Button,
  GluestackUIProvider,
  Heading,
  Input,
  InputField,
  Text,
  HStack,
  LinkText,Link,
} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {SafeAreaView} from 'react-native-safe-area-context';
import { insertUser, getUserByEmail,getAllUsers} from '../database/database';

export default function Signup({navigation}:any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   initDatabase();
  // }, []);

  const handlePhoneNumberChange = text => {
    // Remove non-numeric characters
    const numericText = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericText);
  };

  const handleSignup = async () => {
    if (name && email && phoneNumber && password) {
      await insertUser(name, email, phoneNumber, password);
      console.log('User signed up successfully');
    } else {
      console.log('Please fill all fields');
    }
  };



  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <Card size="lg" variant="elevated" m="$3">
            <Heading mb="$5" fontSize={30} alignSelf="center">
              Signup
            </Heading>

            <Input
              variant="rounded"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              mb="$10">
              <InputField
                placeholder="Enter Name here"
                value={name}
                onChangeText={setName}
              />
            </Input>

            <Input
              variant="rounded"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              mb="$10">
              <InputField
                placeholder="Enter Email here"
                value={email}
                onChangeText={setEmail}
              />
            </Input>
            <Input
              variant="rounded"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              mb="$10">
              <InputField
                placeholder="Enter Phone number here"
                value={phoneNumber}
                keyboardType="numeric"
                onChangeText={handlePhoneNumberChange}
              />
            </Input>

            <Input
              variant="rounded"
              size="lg"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}>
              <InputField
                placeholder="Enter password here"
                type="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </Input>

            <Button
              size="md"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              mt="$10"
              width="$21"
              alignSelf="center"
              borderRadius={20}
              onPress={handleSignup}>
              <ButtonText>Signup </ButtonText>
            </Button>
          </Card>
          <HStack alignSelf="center">
  <Text size="lg">Already have account </Text>
  
  <Link onPress={() => navigation.navigate('Login')} isExternal>
    <LinkText size="lg">Login</LinkText>
  </Link>
</HStack>
        </View>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
