import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomComponent1 from './components/CustomComponent1';
import CustomComponent2 from './components/CustomComponent2';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AntDesign  name="setting" size={24} color="orange" />
        <Text>Good morning! What’s for lunch?</Text>
        <ImageBackground
          source={require('./assets/burger-fries.jpeg')}
          style={styles.restaurantImage}
        >
          <Text style={styles.imageText}>Try our new favorites</Text>
        </ImageBackground>
      </View>


      
      <View style={styles.customComponents}>
        <View style={styles.component1Wrapper}>
          <CustomComponent1
            title="Order"
            imageSource={require('./assets/burger-fries.jpeg')}
            message="Start ordering your favorites here"
          />
            <CustomComponent1
            title="Rewards"
            imageSource={require('./assets/food.jpeg')}
            message="Collect Points to earn free rewards"
          />
        </View>
       
        
        <View style={styles.iconsWrapper}>
     
          <CustomComponent2
            iconName="tag"
            iconColor="#FFCC00"
            text="Offers"
          />
          <CustomComponent2
            iconName="car"
            iconColor="green"
            text="Delivery"
          />
          <CustomComponent2
            iconName="gift"
            iconColor="purple"
            text="Gift"
          />
          <CustomComponent2
            iconName="heart"
            iconColor="red"
            text="Community"
          />
          <CustomComponent2
            iconName="creditcard"
            iconColor="black"
            text="Payment"
          />
          <CustomComponent2
            iconName="CompassOutlined"
            iconColor="red"
            text="Locations"
          

          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 37,
    flex: 1,
    padding: 10,
    backgroundColor: 'cream',
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
    marginTop: 110,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: 20,
    padding: 5,
  },
  customComponents: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  component1Wrapper: {
    flexDirection: 'row', 
    marginBottom: 10,
  },
  iconsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
});