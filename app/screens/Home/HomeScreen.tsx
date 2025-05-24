import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation(); // если нет NavigationContainer — здесь будет ошибка

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Navigation object: {JSON.stringify(navigation)}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
