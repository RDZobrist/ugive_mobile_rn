import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Feather, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { primaryColor, secondaryColor } from '../../constants/colors';

const GiveDonateScreen = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Submit Your Offering</Text>
    <View style={styles.iconContainer}>
      <View style={styles.iconandTextContainer_}>

          <FontAwesome5 name="money-check" size={40} color={primaryColor} />
        <Text>Offering</Text>
      </View>
      <View style={styles.iconandTextContainer_}>

          <Ionicons name="leaf-outline" size={40} color={primaryColor} />

        <Text>Tithe</Text>
      </View>
      <View style={styles.iconandTextContainer_}>

    

          <FontAwesome5 name="seedling" size={40} color={primaryColor} />
        <Text>Seed</Text>
      </View>

    </View>
    <View style={styles.iconContainer}>
      <View style={styles.iconandTextContainer}>


        <Feather name="feather" size={40} color={primaryColor} />
        <Text>Mission Work</Text>
      </View>
      <View style={styles.iconandTextContainer}>


        <MaterialCommunityIcons name="home-heart" size={40} color={primaryColor} />
        <Text>Prophetic Offering</Text>
      </View>
      <View style={styles.iconandTextContainer}>



        <FontAwesome5 name="money-check-alt" size={40} color={primaryColor} />
        <Text>Building Offering</Text>
      </View>

    </View>




  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
    
  },
  iconContainer: {
    flex: .3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  iconandTextContainer: {
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconandTextContainer_: {
    marginLeft: 40,
    marginRight:40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default GiveDonateScreen;
