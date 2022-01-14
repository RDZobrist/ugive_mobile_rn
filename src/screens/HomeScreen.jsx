import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {primaryColor, secondaryColor} from '../../constants/colors';

const HomeScreen = () => {
  return(
  <View style={styles.logoContainer}> 
  <Image source={require('../../assets/icon.png')} style={styles.imageLogo}/>
    <Text style={styles.text}>UGIVE</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  logoContainer:{
    backgroundColor: '#ffffff',
    height: '100%'
  },
  text: {
    fontSize: 37,
    color: secondaryColor,
    width: '35%',
    marginTop:15,
    marginRight: '37.5%',
    marginLeft: '37.5%',
    fontWeight: '700'
  },
  imageLogo: {
    marginTop: '65%',
    marginLeft: '8.5%',
    marginRight:'8.5%',
    width: '83%'
  }
});

export default HomeScreen;

