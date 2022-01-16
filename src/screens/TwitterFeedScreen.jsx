import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
const TwitterFeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What's happening on Twitter</Text>
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

export default TwitterFeedScreen;
