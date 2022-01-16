import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import {
  Feather,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { primaryColor, secondaryColor } from '../../constants/colors';



const GiveDonateScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Your Offering</Text>
      <View style={styles.buttonBarContainer}>
        <View style={styles.iconContainerButtonBar}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Schedule Counseling")}>
              <MaterialCommunityIcons name="monitor-dashboard" style={styles.icon} size={40} color='#fafafa' />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Verse of the Day")}>
            <View style={styles.icon}>
              <Ionicons name="bible" size={40} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Send Message")}>
            <FontAwesome name="envelope" size={40} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Twitter Feed")}>
            <MaterialCommunityIcons name="twitter" style={styles.icon} size={45} color='#fafafa' />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Instagram Feed")}>
            <MaterialCommunityIcons name="instagram" size={40} style={styles.icon} color='#fafafa' />
          </TouchableOpacity>
        </View>
      </View>    
      <View style={styles.iconContainer}>
        <View style={styles.iconandTextContainer_}>
          <FontAwesome5 name="money-check" size={50} color={primaryColor} />
          <Text>Offering</Text>
        </View>
        <View style={styles.iconandTextContainer_}>
          <Ionicons name="leaf-outline" size={50} color={primaryColor} />
          <Text>Tithe</Text>
        </View>
        <View style={styles.iconandTextContainer_}>
          <FontAwesome5 name="seedling" size={50} color={primaryColor} />
          <Text>Seed</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconandTextContainer}>
          <Feather name="feather" size={50} color={primaryColor} />
          <Text>Mission Work</Text>
        </View>
        <View style={styles.iconandTextContainer}>
          <MaterialCommunityIcons name="home-heart" size={50} color={primaryColor} />
          <Text>Prophetic Offering</Text>
        </View>
        <View style={styles.iconandTextContainer}>
          <FontAwesome5 name="money-check-alt" size={50} color={primaryColor} />
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
    marginRight: 40,
    justifyContent: 'center',
    alignItems: 'center'
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
  }
});


export default GiveDonateScreen;
