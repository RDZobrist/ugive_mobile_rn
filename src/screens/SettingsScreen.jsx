import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, AntDesign, Feather, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { primaryColor, secondaryColor } from '../../constants/colors';
const SettingsScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.buttonBarContainer}>
        <View style={styles.iconContainerButtonBar}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Schedule Counseling")}>
              <MaterialCommunityIcons name="monitor-dashboard" style={styles.icon} size={40} color='#fafafa' />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Verse of the Day")}>
            <View style={styles.icon}>
              <Ionicons name="receipt" size={40} style={styles.icon} />
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
       </View>
  )
};
  

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    backgroundColor: '#ffffff',
    height: '100%'
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
});

export default SettingsScreen;
