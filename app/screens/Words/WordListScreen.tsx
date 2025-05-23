import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WordListScreen = () => (
  <View style={styles.container}>
    <Text>Word List Screen</Text>
  </View>
);

export default WordListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
