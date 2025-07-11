import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Wishlist from '../screens/Wishlist';
import Cart from '../screens/Cart';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Home')
            iconName = focused ? 'home' : 'home-outline';
          if (route.name === 'Wishlist')
            iconName = focused ? 'heart' : 'heart-outline';
          if (route.name === 'Cart')
            iconName = focused ? 'cart' : 'cart-outline';
          if (route.name === 'Search')
            iconName = focused ? 'search' : 'search-outline';
          if (route.name === 'Settings')
            iconName = focused ? 'settings' : 'settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#F83758',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontFamily: 'Montserrat-Regular' },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeStack} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
