import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import LearnNextScreen from '../screens/Home/LearnNextScreen';
import LearnScreen from '../screens/Home/LearnScreen';
import RepeatWordScreen from '../screens/Home/RepeatWordScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RepeatWord" component={RepeatWordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Learn" component={LearnScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LearnNext" component={LearnNextScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
