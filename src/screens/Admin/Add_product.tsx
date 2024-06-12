import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {config} from '@gluestack-ui/config';
import {SafeAreaView} from 'react-native-safe-area-context';
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
  Textarea,
  TextareaInput,
  ButtonIcon,
  AddIcon,
} from '@gluestack-ui/themed';
import {insertProduct} from '../../database/database';

export default function Add_product() {
  const [productName, setproductName] = useState('');
  const [productPrice, setproductPrice] = useState('');
  const [productDis, setproductDis] = useState('');
  const [productCategory, setproductCategory] = useState('');
  const [productImg, setproductImg] = useState('');

  const handleInsertProduct = async() => {
    if (
      productName &&
      productPrice &&
      productDis &&
      productCategory &&
      productImg
    ) {
      await insertProduct(
        productName,
        productPrice,
        productDis,
        productCategory,
        productImg,
      );
      Alert.alert('Done', 'Product added Successfully', [
        {
          text: 'OK',
        },
      ]);
      console.log('product added');
setproductName('');
setproductPrice('');
setproductDis('');
setproductCategory('');
setproductImg('');


    } else {
        Alert.alert('Error', 'Fill all details', [
            {
              text: 'OK',
            },
          ]);
      console.log('Please fill all fields');
    }
  };



  return (
    <GluestackUIProvider config={config}>
      <Card size="md" variant="elevated" m="$3">
        <Heading mb="$1" size="md">
          Fill product details
        </Heading>
        <Input
          m={10}
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            placeholder="Enter Name of product "
            value={productName}
            onChangeText={setproductName}
          />
        </Input>
        <HStack space="sm" reversed={false}>
          <Input
            w="$1/3"
            m={10}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}>
            <InputField
              placeholder="Product Price"
              keyboardType="numeric"
              value={productPrice}
              onChangeText={setproductPrice}
            />
          </Input>
          <Input
            w="$1/2"
            m={10}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}>
            <InputField
              placeholder="Product Category"
              value={productCategory}
              onChangeText={setproductCategory}
            />
          </Input>
        </HStack>
        <Input
          m={10}
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            placeholder="Enater Link of Image"
            value={productImg}
            onChangeText={setproductImg}
          />
        </Input>

        <Textarea
          size="md"
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          w="auto"
          m={10}>
          <TextareaInput
            placeholder="Your text goes here..."
            value={productDis}
            onChangeText={setproductDis}
          />
        </Textarea>

        <Button
          alignSelf="center"
          w={100}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false} onPress={handleInsertProduct}>
          <ButtonText>Add </ButtonText>
          <ButtonIcon as={AddIcon} w={2} />
        </Button>
      </Card>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({});
