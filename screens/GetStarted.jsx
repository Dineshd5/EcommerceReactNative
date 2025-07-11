import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HomeBackground from '../assets/images/HomeBackground.png';

import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={HomeBackground}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.63)']}
          style={styles.gradient}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>You want Authentic, here you go!</Text>
            <Text style={styles.subtitle}>Find it here, buy it now!</Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 362,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold', // Load this font
    fontSize: 34,
    fontWeight: '600',
    lineHeight: 34,
    letterSpacing: 0.34, // 1% of 34px
    color: '#fff',
    paddingVertical: 5,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular', // Load this font
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22, // 154% of 14px
    letterSpacing: 0.14, // 1%
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    width: 279,
    height: 55,
    backgroundColor: '#F83758',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // for spacing under subtitle
  },

  buttonText: {
    fontFamily: 'Montserrat-semiBold', // Load this font
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
  },
});
