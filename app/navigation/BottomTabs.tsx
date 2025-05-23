import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import WordsStack from './WordsStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Words" component={WordsStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
);


export default BottomTabs;
