import React from 'react';
import { View, Text, Image } from 'react-native';

const CustomComponent1 = ({ title, imageSource, message }) => {
  return (
    <View style={styles.componentFrame}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = {
  componentFrame: {
    width: 180,
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '60%',  
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 9,
   },
  message: {
    fontSize: 9,
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
};

export default CustomComponent1;
