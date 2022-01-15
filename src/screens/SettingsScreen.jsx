import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
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
  }
});

export default SettingsScreen;
