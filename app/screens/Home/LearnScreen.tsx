import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LearnScreen = () => (
  <View style={styles.container}>
    <Text>Learn Screen</Text>
  </View>
);

export default LearnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
