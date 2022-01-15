import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Feather, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { primaryColor, secondaryColor } from '../../constants/colors';

const GiveDonateScreen = () => {
  return (<View style={styles.container}>
    <Text style={styles.title}>Submit Your Offering</Text>
    <View style={styles.separator} lightColor="#dd7a58" darkColor="rgba(255,255,255,0.1)" />
    <View style={styles.iconContainer}>
    <TouchableHighlight
activeOpacity={0.6}
underlayColor="#dd7a58"
>
    <FontAwesome5 name="money-check" size={30} color={primaryColor} />
    </TouchableHighlight>
    <Text>Offering</Text>
    <TouchableHighlight
activeOpacity={0.6}
underlayColor="#dd7a58"
>
    <Ionicons name="leaf-outline" size={36} color={primaryColor} />
    </TouchableHighlight>
    <Text>Tithe</Text>
    <TouchableHighlight
activeOpacity={0.6}
underlayColor="#dd7a58"
>

    <FontAwesome5 name="seedling" size={36} color={primaryColor} />
    </TouchableHighlight>
    <Text>Seed</Text>
    
</View>
<View style={styles.iconContainer}>
<TouchableHighlight
activeOpacity={0.6}
underlayColor="#dd7a58"
>
    <Feather name="feather" size={36} color={primaryColor} />
    </TouchableHighlight>
    <Text>Mission Work</Text>
    <TouchableHighlight
activeOpacity={0.6}
underlayColor="#dd7a58"
>
    <MaterialCommunityIcons name="home-heart" size={36} color={primaryColor} />
    </TouchableHighlight>
    <Text>Prophetic Offering</Text>
    <TouchableHighlight
activeOpacity={0.6}
underlayColor="#dd7a58"
>
    <FontAwesome5 name="money-check-alt" size={36} color={primaryColor} />
    </TouchableHighlight>
    <Text>Building Offering</Text>

</View>
    



    </View>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: .3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 7.5,
    height: 1,
    width: '66.66%',
    color:'#dd7a58'
  },
});


export default GiveDonateScreen;
