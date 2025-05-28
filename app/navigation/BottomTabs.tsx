import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';
import TabBarBackground from '../components/TabBarBackground';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import WordsStack from './WordsStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarBackground: () => <TabBarBackground />,
            tabBarStyle: { backgroundColor: 'transparent', position: 'absolute', borderTopWidth: 0, elevation: 0 },
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../../assets/images/homeActive.png') : require('../../assets/images/homeInActive.png')}
                        style={{ width: 28, height: 28, resizeMode: 'contain', bottom:30, }}
                    />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        color: focused ? '#EA7DCA' : 'rgba(255,255,255,0.6)',
                        fontWeight: 'bold',
                        fontSize: 12,
                        marginTop: 2,
                        bottom:30,
                    }}>
                        Home
                    </Text>
                ),
            }}
        />
        <Tab.Screen
            name="Words"
            component={WordsStack}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../../assets/images/bookActive.png') : require('../../assets/images/bookInActive.png')}
                        style={{ width: 28, height: 28, resizeMode: 'contain', bottom:30, }}
                    />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        color: focused ? '#EA7DCA' : 'rgba(255,255,255,0.6)',
                        fontWeight: 'bold',
                        fontSize: 12,
                        marginTop: 2,
                        bottom:30,
                    }}>
                        Words
                    </Text>
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={focused ? require('../../assets/images/profileActive.png') : require('../../assets/images/profileInActive.png')}
                        style={{ width: 28, height: 28, resizeMode: 'contain', bottom:30 }}
                    />
                ),
                tabBarLabel: ({ focused }) => (
                    <Text style={{
                        color: focused ? '#EA7DCA' : 'rgba(255,255,255,0.6)',
                        fontWeight: 'bold',
                        fontSize: 12,
                        marginTop: 2,
                        bottom:30,
                    }}>
                        Profile
                    </Text>
                ),
            }}
        />
    </Tab.Navigator>
);

export default BottomTabs;
