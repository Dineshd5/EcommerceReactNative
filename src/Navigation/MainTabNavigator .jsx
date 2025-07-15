/* eslint-disable */
// All code in this file will be ignored by ESLint
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import TrendingScreen from '../screens/TrendingScreen';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/Settings';

// SVGs
import HomeIcon from '../assets/JSXIcons/HomeIcon.jsx';
import WishlistIcon from '../assets/JSXIcons/HeartIcon.jsx';
import CartIcon from '../assets/JSXIcons/CartIcon.jsx';
import SearchIcon from '../assets/JSXIcons/SearchIcon.jsx';
import SettingsIcon from '../assets/JSXIcons/SettingsIcon.jsx';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.cartButton}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.cartInner}>{children}</View>
  </TouchableOpacity>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 65,
          position: 'absolute',
          elevation: 5,
          backgroundColor: '#fff',
        },
        tabBarIcon: ({ focused }) => {
          const iconSize = 24;
          const color = focused ? 'red' : 'black';

          switch (route.name) {
            case 'Home':
              return (
                <HomeIcon width={iconSize} height={iconSize} stroke={color} />
              );
            case 'Wishlist':
              return (
                <WishlistIcon
                  width={iconSize}
                  height={iconSize}
                  stroke={color}
                />
              );
            case 'Cart':
              return <CartIcon width={28} height={28} stroke={color} />;
            case 'Search':
              return (
                <SearchIcon width={iconSize} height={iconSize} stroke={color} />
              );
            case 'Settings':
              return (
                <SettingsIcon
                  width={iconSize}
                  height={iconSize}
                  stroke={color}
                />
              );
            default:
              return null;
          }
        },
        tabBarLabel: ({ focused }) => {
          // Optional: Hide Cart label completely
          if (route.name === 'Cart') return null;

          return (
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
                color: focused ? 'red' : 'black',
              }}
            >
              {route.name}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wishlist" component={TrendingScreen} />

      {/* Special Cart Tab */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({
  cartButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  cartInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    // Elevation (Android)
    elevation: 10,

    // Shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});
