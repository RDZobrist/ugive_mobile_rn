import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
const InstagramFeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What's happening on Instagram</Text>
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

export default InstagramFeedScreen;
