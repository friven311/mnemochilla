import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LearnScreen from '../screens/Home/LearnScreen'; // переиспользуем Learn
import WordListScreen from '../screens/Words/WordListScreen';

const Stack = createNativeStackNavigator();

const WordsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WordList" component={WordListScreen} />
      <Stack.Screen name="Learn" component={LearnScreen} />
    </Stack.Navigator>
  );
};

export default WordsStack;
