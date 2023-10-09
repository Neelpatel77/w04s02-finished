import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
 

const CustomComponent2 = ({ iconName, iconColor, text }) => {
  return (       
    <View style={styles.iconFrame}>
      <AntDesign name={iconName} size={50} color={iconColor} />
      <Text style={{ fontSize: 18, marginTop: 5 }}>{text}</Text>
 
    </View>
  );
};

const styles = {
  iconFrame: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

export default CustomComponent2;
