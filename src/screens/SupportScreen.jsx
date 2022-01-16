import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SimpleLineIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { primaryColor, secondaryColor } from '../../constants/colors';
import ButtonBar from '../components/ButtonBar';

const SupportScreen = () => {
  return (<View style={styles.container}>
    <Text style={styles.title}>We're Always Here if You Need Us</Text>
    <Text>Ways to connect with us</Text>
    <ButtonBar />
    <AntDesign name="phone" size={36} style={styles.icons} color={primaryColor} />
    <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

    <SimpleLineIcons name="social-facebook" style={styles.icons} size={36} color={primaryColor} />
    <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

    <Feather name="twitter" style={styles.icons} size={36} color={primaryColor} />
    <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

    <Feather name="instagram" style={styles.icons} size={36} color={primaryColor} />
    <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

    <Ionicons name="md-location-outline" style={styles.icons} size={36} color={primaryColor} />
    
    <View style={styles.separator}  />

    <AntDesign name="message1" style={styles.icons} size={36} color={primaryColor} />
    <View style={styles.separator} lightColor="black" darkColor="rgba(255,255,255,0.1)" />

  </View>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
 
  icons: {
    marginRight: '77.77%',
    marginTop: 10
  }
});
export default SupportScreen;
