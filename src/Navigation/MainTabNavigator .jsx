import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrendingScreen from '../screens/TrendingScreen';
import Settings from '../screens/Settings';
import HomeScreen from '../screens/HomeScreen';

// SVG Icons
import HomeIcon from '../assets/svg/home.svg';
import WishlistIcon from '../assets/svg/heart.svg';
import SettingsIcon from '../assets/svg/settings.svg';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          let IconComponent;
          switch (route.name) {
            case 'Home':
              IconComponent = HomeIcon;
              break;
            case 'Wishlist':
              IconComponent = WishlistIcon;
              break;
            case 'Settings':
              IconComponent = SettingsIcon;
              break;
            default:
              IconComponent = HomeIcon;
          }

          return (
            <IconComponent
              width={size}
              height={size}
              stroke={focused ? 'red' : 'white'} // 💡 Custom stroke color here
              fill="none" // Make sure fill is none
            />
          );
        },

        tabBarLabelStyle: {
          fontFamily: 'Montserrat-Regular',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wishlist" component={TrendingScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
