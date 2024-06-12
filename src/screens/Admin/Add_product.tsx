import {StyleSheet, View} from 'react-native';
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
} from '@gluestack-ui/themed';

export default function Add_product() {
  const [productName, setproductName] = useState('');
  const [productPrice, seproductPrice] = useState('');
  const [productDis, setproductDis] = useState('');
  const [productCategory, setproductCategory] = useState('');
  const [productImg, setproductImg] = useState('');

  return (
    <GluestackUIProvider config={config}>
      <Card size="md" variant="elevated" m="$3">
        <Heading mb="$1" size="md">
          hedainf
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
              value={productPrice}
              onChangeText={seproductPrice}
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
          <TextareaInput placeholder="Your text goes here..."  value={productDis}
            onChangeText={setproductDis} />
        </Textarea>
      </Card>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({});
