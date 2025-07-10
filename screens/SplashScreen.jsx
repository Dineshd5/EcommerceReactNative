// SplashScreen.js
import React, { useEffect } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('StartScreen'); // or navigate(), but replace() avoids going back
    }, 100); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Replace the image below with your logo */}
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
    lineHeight: 44, // should be equal to or slightly more than fontSize
    color: 'rgba(248, 55, 88, 1)',
    padding: 20,
  },
});
