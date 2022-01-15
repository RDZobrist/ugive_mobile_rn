import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SimpleLineIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { primaryColor, secondaryColor } from '../../constants/colors';

const SupportScreen = () => {
  return (<View style={styles.container}>
    <Text style={styles.title}>We're Always Here if You Need Us</Text>
    <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />
    <Text>Ways to connect with us</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 7.5,
    height: 1,
    width: '66.66%',
  },
  icons: {
    marginRight: '77.77%',
    marginTop: 10
  }
});
export default SupportScreen;
