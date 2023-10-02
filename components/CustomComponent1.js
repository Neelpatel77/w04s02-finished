import React from 'react';
import { View, Image, Text } from 'react-native';

const CustomComponent1 = ({ title, imageSource, message }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={imageSource}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <Text style={{ fontSize: 16 }}>{message}</Text>
    </View>
  );
};

export default CustomComponent1;
