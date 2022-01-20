import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const ScheduleCounselingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.contaier}>
    <Text style={styles.text}>Schedule Counseling</Text>
  </View>
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

export default ScheduleCounselingScreen;
