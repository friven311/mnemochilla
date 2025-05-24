import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabs from './navigation/BottomTabs';

const App = () => {
  console.log('Rendering App'); // 🟡 лог
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
