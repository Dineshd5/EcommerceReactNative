// components/BannerCard.js
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

const BannerCard = () => {
  return (
    <ImageBackground
      source={require('../assets/images/banner.png')} // replace with your banner image
      style={styles.banner}
      imageStyle={{ borderRadius: 12 }}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.bannerText}>Special Offer!</Text>
      </View>
    </ImageBackground>
  );
};

export default BannerCard;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  banner: {
    width: width - 24,
    height: 160,
    marginVertical: 10,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  bannerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
