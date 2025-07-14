import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: '50-40% OFF',
    text: 'Now in (products)',
    Subtext: 'All colours',
    image: require('../assets/images/banner.png'),
  },
  {
    key: '2',
    title: 'New Arrivals',
    text: 'Summer 25 Collection',
    image: require('../assets/images/banner1.png'),
  },
];

const BannerCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const renderItem = ({ item }) => (
    <ImageBackground
      source={item.image}
      style={styles.banner}
      imageStyle={{ borderRadius: 12 }}
    >
      <View style={styles.overlay}>
        <Text style={styles.bannerText}>{item.title}</Text>
        <Text style={styles.bannerSubText}>{item.text}</Text>
        {item.Subtext && (
          <Text style={styles.bannerSubText}>{item.Subtext}</Text>
        )}

        {/* ✅ Custom Shop Now Button */}
        <TouchableOpacity style={styles.shopNowButton}>
          <Text style={styles.shopNowText}>Shop Now →</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  return (
    <View style={{ height: 190 }}>
      <AppIntroSlider
        data={slides}
        ref={sliderRef}
        renderItem={renderItem}
        showDoneButton={false}
        showNextButton={false}
        showPrevButton={false}
        dotClickEnabled={true}
        onSlideChange={index => setCurrentIndex(index)} // ✅ ADD THIS
        dotStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }}
        activeDotStyle={{
          backgroundColor: '#fff',
        }}
        renderPagination={() => (
          <View style={styles.pagination}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  i === currentIndex ? styles.activeDot : null,
                ]}
              />
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default BannerCard;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    width: width - 24,
    justifyContent: 'center',
  },
  overlay: {
    padding: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  bannerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  bannerSubText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  shopNowButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  shopNowText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
