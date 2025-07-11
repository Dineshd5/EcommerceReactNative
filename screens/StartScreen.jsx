import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Gstyles } from '../styles/global';
import { slides } from '../data/slides';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StartScreen = ({ navigation }) => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const onSlideChange = index => {
    setCurrent(index);
  };

  const handleCompleteIntro = async () => {
    try {
      await AsyncStorage.setItem('hasSeenIntro', 'true');
      navigation.replace('signIn');
    } catch (err) {
      console.error('Error saving hasSeenIntro:', err);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image style={Gstyles.dynamicImage} source={item.img} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={Gstyles.appContainer}>
      <StatusBar barStyle="dark-content" />

      {/* Top: page count + skip */}
      <View style={styles.MainContainer}>
        <Text style={styles.pageCount}>
          <Text style={styles.TextSpan}>{current + 1}</Text> / {slides.length}
        </Text>
        {current !== slides.length - 1 && (
          <TouchableOpacity onPress={handleCompleteIntro}>
            <Text style={styles.button}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Slider */}
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderItem}
        showDoneButton={false}
        showNextButton={false}
        showPrevButton={false}
        onSlideChange={onSlideChange}
        dotClickEnabled={true}
        renderPagination={() => null}
      />

      {/* Bottom Controls */}
      <View style={styles.buttonRow}>
        {/* Prev */}
        <View style={styles.buttonContainer}>
          {current > 0 ? (
            <TouchableOpacity
              onPress={() => sliderRef.current?.goToSlide(current - 1, true)}
            >
              <Text style={styles.button}>Prev</Text>
            </TouchableOpacity>
          ) : (
            <Text style={[styles.button, styles.disabled]}> </Text>
          )}
        </View>

        {/* Dots */}
        <View style={styles.dotContainer}>
          {slides.map((_, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => sliderRef.current?.goToSlide(i, true)}
            >
              <View style={[styles.dot, current === i && styles.activeDot]} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Next / Get Started */}
        <View style={[styles.button, { flexShrink: 1, paddingHorizontal: 2 }]}>
          {current === slides.length - 1 ? (
            <TouchableOpacity onPress={handleCompleteIntro}>
              <Text
                style={[styles.button, Gstyles.primaryColor]}
                includeFontPadding={false}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => sliderRef.current?.goToSlide(current + 1, true)}
            >
              <Text
                style={[styles.button, Gstyles.primaryColor]}
                numberOfLines={1}
              >
                Next
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  pageCount: {
    fontSize: 16,
    padding: 10,
    marginLeft: 10,
    color: 'rgba(168, 168, 169, 1)',
    fontFamily: 'Montserrat-Bold',
  },
  TextSpan: {
    fontSize: 16,
    marginLeft: 20,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#000',
  },
  content: {
    width: 340,
    height: 72,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 1.2,
    marginTop: 10,
    textAlign: 'center',
    color: 'rgba(168, 168, 169, 1)',
    fontFamily: 'Montserrat-SemiBold',
  },
  dots: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },

  buttonContainer: {
    // flexShrink: 1,
    minWidth: 44,
    alignItems: 'center',
  },

  dotContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    marginHorizontal: 4,
  },

  button: {
    fontSize: 18,
    padding: 10,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  disabled: {
    color: '#999',
  },
});
