import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import LearnNextScreen from '../screens/Home/LearnNextScreen';
import LearnScreen from '../screens/Home/LearnScreen';
import RepeatWordScreen from '../screens/Home/RepeatWordScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="RepeatWord" component={RepeatWordScreen} />
      <Stack.Screen name="Learn" component={LearnScreen} />
      <Stack.Screen name="LearnNext" component={LearnNextScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
