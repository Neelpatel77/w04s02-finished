import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Custom Components
const CustomComponent1 = ({ title, imageSource, message }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <ImageBackground
        source={imageSource}
        style={{ width: 150, height: 150, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
      </ImageBackground>
      <Text style={{ fontSize: 18 }}>{message}</Text>
    </View>
  );
};

const CustomComponent2 = ({ iconName, iconColor, text }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <AntDesign name={iconName} size={24} color={iconColor} />
      <Text style={{ fontSize: 18, marginLeft: 10 }}>{text}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AntDesign name="restaurant" size={24} color="black" />
        <Text>Good morning! What’s for lunch?</Text>
        <ImageBackground
          source={require('./assets/restaurant-item.png')}
          style={styles.restaurantImage}
        >
          <Text style={styles.imageText}>Try our new favorites</Text>
        </ImageBackground>
      </View>
      <View style={styles.customComponents}>
        <CustomComponent1
          title="Order"
          imageSource={require('./assets/burger-fries.png')}
          message="Start ordering your favorites here"
        />
        <CustomComponent2
          iconName="heart"
          iconColor="red"
          text="Favorites"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  topContainer: {
    alignItems: 'center',
  },
  restaurantImage: {
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  imageText: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: 20,
    padding: 5,
  },
  customComponents: {
    marginTop: 20,
  },
});
