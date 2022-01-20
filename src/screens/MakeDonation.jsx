import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MakeDonationScreen = ({route, navigation}) => {
  return (
    <View style={styles.contaier}>
    <Text style={styles.text}>{console.log(route.params.donationTypes)}</Text>
  </View>
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
