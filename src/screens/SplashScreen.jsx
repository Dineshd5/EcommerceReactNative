import React, { useEffect } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAppState = async () => {
      try {
        const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');

        setTimeout(() => {
          if (isFirstLaunch === null) {
            AsyncStorage.setItem('isFirstLaunch', 'false');
            navigation.replace('StartScreen');
          } else if (isLoggedIn === 'true') {
            navigation.replace('GetStarted');
          } else {
            navigation.replace('signIn');
          }
        }, 2000);
      } catch (error) {
        console.log('SplashScreen error:', error);
        navigation.replace('signIn');
      }
    };

    checkAppState();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.splashContainer}>
        <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Stylish</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 125,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: '800',
    fontFamily: 'LibreCaslonText-Bold',
    lineHeight: 44,
    color: 'rgba(248, 55, 88, 1)',
    padding: 20,
  },
});
