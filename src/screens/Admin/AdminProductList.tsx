import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import { Card, Heading, Text, Button, ButtonText, GluestackUIProvider } from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import { getAllProducts, deleteProduct } from '../../database/database';

const AdminProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productList = await getAllProducts();
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteProduct = async (productId:any) => {
    try {
      await deleteProduct(productId);
      Alert.alert('Product deleted successfully');
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error('Error deleting product:', error);
      Alert.alert('Error deleting product');
    }
  };

  const renderProduct = ({ item }:any) => (
    <Card style={styles.card}>
      <Heading mb="$1" size="md">
        {item.productName}
      </Heading>
      <Text fontSize={25}>{item.productPrice}</Text>
      <Text size="sm">{item.productDis}</Text>
      <Button onPress={() => handleDeleteProduct(item.id)}>
        <ButtonText>Delete</ButtonText>
      </Button>
    </Card>
  );

  return (
    <GluestackUIProvider config={config}>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default AdminProductList;
