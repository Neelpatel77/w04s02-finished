import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomComponent2 = ({ iconName, iconColor, text }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <AntDesign name={iconName} size={24} color={iconColor} />
      <Text style={{ fontSize: 18, marginLeft: 10 }}>{text}</Text>
    </View>
  );
};

export default CustomComponent2;
