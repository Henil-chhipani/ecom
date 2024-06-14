import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
  LinkText,
  Link,
  Badge,
  BadgeText,
  BadgeIcon,
  GlobeIcon,
} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {Image} from '@gluestack-ui/themed';
import {getAllProducts} from '../../database/database';
import {useAuth} from '../../contexts/AuthContext';

const renderProduct = ({item}: any) => (
  <Card size="md" variant="elevated" m="$1" w="$1/2" marginLeft={0}>
    <Image
      size="2xl"
      source={{
        uri: 'data:image/jpeg;base64,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',
      }}
      alignSelf="center"
      borderRadius={10}
    />
    <Heading mb="$1" size="md">
      {item.productName}
      <Badge
        p={2}
        m={2}
        w="$1/2"
        width="auto"
        size="sm"
        variant="solid"
        borderRadius="$none"
        action="success">
        <BadgeText>{item.productCategory}</BadgeText>
      </Badge>
    </Heading>
    <Text fontSize={25}> {item.productPrice}</Text>
    <Text size="sm"> {item.productDis}</Text>
    <Button>
      <ButtonText>Buy</ButtonText>
    </Button>
  </Card>
);

export default function Home({navigation}: any) {
  const [products, setProducts] = useState([]);

  const {logout} = useAuth();

  const logoutPress = async () => {
    logout();
    navigation.replace('Login');
  };

  const fetchProducts = async () => {
    const productData = await getAllProducts();
    setProducts(productData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={styles.container}>
        <HStack justifyContent="space-between" alignItems="center" p={10}>
          <Heading fontSize={30} alignSelf="center">
            Products
          </Heading>
          <Button onPress={logoutPress} alignSelf="flex-end" borderRadius={10}>
            <ButtonText>Logout</ButtonText>
          </Button>
        </HStack>

        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProduct}
          numColumns={2}
          horizontal={false}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  listContainer: {
    paddingHorizontal: 8,
  },
});
