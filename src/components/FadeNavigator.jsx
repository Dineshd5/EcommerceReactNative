import React from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';

const FadeNavigator = ({ fadeAnim, to, navigation, children }) => {
  const handlePress = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate(to);
      fadeAnim.setValue(1); // Reset fade for reusability
    });
  };

  return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
};

export default FadeNavigator;
