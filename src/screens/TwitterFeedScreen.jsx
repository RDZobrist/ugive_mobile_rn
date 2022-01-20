import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
const TwitterFeedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Text style={styles.text}>What's happening on Twitter</Text>
    </View>
    </SafeAreaView>
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
