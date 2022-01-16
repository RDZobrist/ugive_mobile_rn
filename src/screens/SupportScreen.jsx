import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, AntDesign, Feather, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { primaryColor, secondaryColor } from '../../constants/colors';

const SupportScreen = props => {
  return (<View style={styles.container}>
    <Text style={styles.title}>We're Always Here if You Need Us</Text>
    <Text>Ways to connect with us</Text>
    <View style={styles.buttonBarContainer}>
      <View style={styles.iconContainerButtonBar}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Schedule Counseling")}>
            <MaterialCommunityIcons name="monitor-dashboard" style={styles.icon} size={40} color='#fafafa' />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Verse of the Day")}>
          <View style={styles.icon}>
            <Ionicons name="receipt" size={40} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Send Message")}>
          <FontAwesome name="envelope" size={40} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Twitter Feed")}>
          <MaterialCommunityIcons name="twitter" style={styles.icon} size={45} color='#fafafa' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Instagram Feed")}>
          <MaterialCommunityIcons name="instagram" size={40} style={styles.icon} color='#fafafa' />
        </TouchableOpacity>
      </View>
    </View>     
    <AntDesign name="phone" size={36} style={styles.icons} color={primaryColor} />
    <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

    <SimpleLineIcons name="social-facebook" style={styles.icons} size={36} color={primaryColor} />
    <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

    <Feather name="twitter" style={styles.icons} size={36} color={primaryColor} />
    <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

    <Feather name="instagram" style={styles.icons} size={36} color={primaryColor} />
    <View style={styles.separator} lightColor="lightgray" darkColor="rgba(255,255,255,0.1)" />

    <Ionicons name="md-location-outline" style={styles.icons} size={36} color={primaryColor} />

    <View style={styles.separator} />

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
  buttonBarContainer: {
    height: 75,
    backgroundColor: primaryColor,
    marginTop: '57.75%'
  },
  iconContainerButtonBar: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '20.33%',
    marginRight: '20.33%',
    marginTop: '2.33%'

  },
  icon: {
    paddingRight: 12.5,
    paddingTop: 5.5,
    color: '#fefefe'
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
