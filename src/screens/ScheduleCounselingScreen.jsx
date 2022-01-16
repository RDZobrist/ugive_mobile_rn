import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ScheduleCounselingScreen = () => {
  return (
    <View style={styles.contaier}>
    <Text style={styles.text}>Schedule Counseling</Text>
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

export default ScheduleCounselingScreen;
