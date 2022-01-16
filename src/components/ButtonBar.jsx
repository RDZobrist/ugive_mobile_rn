import React, { Children } from 'react';
import { Feather, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, StyleSheet, View, TouchableOpacity, Button, Pressable} from 'react-native';
import { primaryColor, secondaryColor } from '../../constants/colors';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ButtonBar = () => {
  return (
      <View style={styles.buttonBarContainer}>
        <View style={styles.iconContainer}>
                      <View style={styles.icons}>
           <Pressable
            onPress={() => alert('Pressed!')}>
                    <MaterialCommunityIcons name="monitor-dashboard" style={styles.icon} size={40} color='#fafafa' />  
                    </Pressable>     

                </View>          
        <TouchableOpacity >
            <View style={styles.icons}>

                <Ionicons name="receipt" size={40} style={styles.icon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity >
            <FontAwesome name="envelope"  size={40} style={styles.icon}/>            
            </TouchableOpacity>
            <TouchableOpacity >
                <MaterialCommunityIcons name="twitter" style={styles.icon} size={45} color='#fafafa' />
            </TouchableOpacity><TouchableOpacity >
                <MaterialCommunityIcons name="instagram" size={40} style={styles.icon} color='#fafafa' />
            </TouchableOpacity>
        </View>
      </View>
  )
};
  

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonBarContainer: {
    height: 75,
    backgroundColor: primaryColor,
    marginTop: '57.75%'
  },
  iconContainer: {
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

export default ButtonBar;
