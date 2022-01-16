import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
const SendMessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Send us a Message</Text>
    </View>
  )
};
  

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    alignContent: 'center'
  }
});

export default SendMessageScreen;
