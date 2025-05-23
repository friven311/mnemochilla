import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LearnNextScreen = () => (
  <View style={styles.container}>
    <Text>Learn Next Screen</Text>
  </View>
);

export default LearnNextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
