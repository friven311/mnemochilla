import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WordListScreen from '../screens/Words/WordListScreen';
import LearnScreen from '../screens/Home/LearnScreen'; // переиспользуем Learn

const Stack = createNativeStackNavigator();

const WordsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WordList" component={WordListScreen} />
      <Stack.Screen name="Learn" component={LearnScreen} />
    </Stack.Navigator>
  );
};

export default WordsStack;
