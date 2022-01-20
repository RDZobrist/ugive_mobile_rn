import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet, View, Button, TouchableOpacity, Pressable } from 'react-native';
import {
  Feather,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { primaryColor, secondaryColor } from '../../constants/colors';



class GiveDonateScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    offeringSelected: false,
    titheSelected: false,
    seedSelected: false,
    propheticofferingSelected: false,
    missionworkSelected: false,
    buildingofferingSelected: false

  };
   getDontionTypesSelected = (state)=>{
    let donationTypesSelected = [];
    if(this.state.offeringSelected){
      donationTypesSelected.push('offering')
    };
    if(this.state.titheSelected){
      donationTypesSelected.push('tithe')
    }
    if(this.state.seedSelected){
      donationTypesSelected.push('seed')
    } 
    if(this.state.propheticofferingSelected){
      donationTypesSelected.push('prophetic')
    }
    if(this.state.missionworkSelected){
      donationTypesSelected.push('mission')
    }
    if(this.state.buildingofferingSelected){
      donationTypesSelected.push('building')
      
    }
    return donationTypesSelected;
    
  }

  render() {


    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Submit Your Offering</Text>
        <View style={styles.buttonBarContainer}>
          {/* 
        BUTTON BAR - Solid Green 
         */}
          <View style={styles.iconContainerButtonBar}>
            <View style={styles.icon}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Schedule Counseling")}>
                <MaterialCommunityIcons name="monitor-dashboard" style={styles.icon} size={40} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Verse of the Day")}>
              <View style={styles.icon}>
                <FontAwesome5 name="bible" size={40} style={styles.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Send Message")}>
              <FontAwesome name="envelope" size={40} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Twitter Feed")}>
              <MaterialCommunityIcons name="twitter" style={styles.icon} size={45} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Instagram Feed")}>
              <MaterialCommunityIcons name="instagram" size={40} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* 
      Lower Half of Screen Icons
      */}
        <View style={styles.iconContainer}>
          <Pressable onPress={() => this.setState({ offeringSelected: !this.state.offeringSelected })}>
            <View style={styles.iconandTextContainer_}>
              {!this.state.offeringSelected ?
                <FontAwesome5 name="money-check" size={50} color={primaryColor} />
                :
                <FontAwesome5 name="money-check" size={50} color={secondaryColor} />
              }
              <Text>Offering</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => this.setState({ titheSelected: !this.state.titheSelected })}>
            <View style={styles.iconandTextContainer_}>
              {!this.state.titheSelected ?
                <Ionicons name="leaf-outline" size={50} color={primaryColor} />
                :
                <Ionicons name="leaf-outline" size={50} color={secondaryColor} />
              }
              <Text>Tithe</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => this.setState({ seedSelected: !this.state.seedSelected })}>
            <View style={styles.iconandTextContainer_}>
              {!this.state.seedSelected ?
                <FontAwesome5 name="seedling" size={50} color={primaryColor} />
                :
                <FontAwesome5 name="seedling" size={50} color={secondaryColor} />

              }
              <Text>Seed</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.iconContainer}>
          <Pressable onPress={() => this.setState({ missionworkSelected: !this.state.missionworkSelected })}>
            <View style={styles.iconandTextContainer}>
              {!this.state.missionworkSelected ?
                <Feather name="feather" size={50} color={primaryColor} />
                :
                <Feather name="feather" size={50} color={secondaryColor} />
              }
              <Text>Mission Work</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => this.setState({ propheticofferingSelected: !this.state.propheticofferingSelected })}>

            <View style={styles.iconandTextContainer}>
              {!this.state.propheticofferingSelected ?
                <MaterialCommunityIcons name="home-heart" size={50} color={primaryColor} />
                :
                <MaterialCommunityIcons name="home-heart" size={50} color={secondaryColor} />
              }
              <Text>Prophetic Offering</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => this.setState({ buildingofferingSelected: !this.state.buildingofferingSelected })}>

            <View style={styles.iconandTextContainer}>
              {!this.state.buildingofferingSelected ?
                <FontAwesome5 name="money-check-alt" size={50} color={primaryColor} />
                :
                <FontAwesome5 name="money-check-alt" size={50} color={secondaryColor} />
              }
              <Text>Building Offering</Text>
            </View>
          </Pressable>
          </View>
        {
        this.state.propheticofferingSelected || 
        this.state.seedSelected || 
        this.state.offeringSelected || 
        this.state.buildingofferingSelected || 
        this.state.missionworkSelected || 
        this.state.titheSelected ?
        <Pressable onPress={()=>this.props.navigation.navigate("Make Donation", {donationTypes:this.getDontionTypesSelected()})}>        
          <Feather name="arrow-right" size={60} style={styles.arrowIcon} color={secondaryColor} />
        </Pressable>
        :
        null
      }
      </View>
      </SafeAreaView>
    )
  };
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
  },
  arrowIcon: {
    paddingRight: 12.5,
    paddingTop: 5.5,
    marginLeft:'60%'
    }
});


export default GiveDonateScreen;
