import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
const MakeDonationScreen = ({route, navigation}) => {
  return (
      <SafeAreaView style={styles.container}>
    {route.params.donationTypes[0] === 'tithe' || 'offering' || 'seed' || 'building' || 'prophetic' || 'mission' ?
        <View style={styles.contaier}>

                  <Text style={styles.text}>{route.params.donationTypes[0]}</Text>
                  <Text style={styles.text}>{route.params.donationTypes[1]}</Text>
                  <Text style={styles.text}>{route.params.donationTypes[2]}</Text>
                  <Text style={styles.text}>{route.params.donationTypes[3]}</Text>
                  <Text style={styles.text}>{route.params.donationTypes[4]}</Text>
                  <Text style={styles.text}>{route.params.donationTypes[5]}</Text>
                  </View>

                  :
                  <Text style={styles.text}>{navigation.navigate("   ")}</Text>
  }    

      </SafeAreaView>
            

  );
};

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: '#fafafa'
  },
  text: {
    fontSize: 30,
  },
});

export default MakeDonationScreen;
