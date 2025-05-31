import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default ProfileStack;
