import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryScroll from '../components/CategoryScroll';
import BannerCard from '../components/BannerCard';
import ProductCard from '../components/ProductCard';
import Heals from '../assets/images/healsshoe.png';
import Special from '../assets/images/SpecialOffer.png';
import emoji from '../assets/images/emoji.png';
import { Allfeatures } from '../data/AllFeatured.js';
import { DealoftheDay } from '../data/DealoftheDay.js';
import LinearGradient from 'react-native-linear-gradient';
import ViewAllComponent from '../components/ViewAllComponent.jsx';
import Alarm from '../assets/svg/Alarm.svg';
import Date from '../assets/svg/Date.svg';
import { TrendingProductsData } from '../data/TrendingProductsData.js';
import GreaterThan from '../assets/svg/greaterThan.svg';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import SortAndFilter from '../components/SortAndFilter.jsx';
import Header from '../components/Header.jsx';
const HomeScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();
  console.log(tabBarHeight);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />

      {/* All Featured */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: tabBarHeight,
        }}
      >
        {/*  Sort And Filter*/}
        <SortAndFilter title="All Featured" />
        {/* circle Category Scroll */}
        <CategoryScroll catagories={Allfeatures} />

        {/*shopNow Banner */}
        <BannerCard />

        <ViewAllComponent
          title="Deal of the Day"
          timer="2h 55m 20s remaining"
          bgColor="rgba(67, 146, 249, 1)"
          Icon={Alarm}
        />
        <FlatList
          data={DealoftheDay}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ProductCard item={item} />}
        />

        {/* Special Offer */}
        <View style={styles.specialContainer}>
          <View>
            <Image source={Special} style={{ width: 75, height: 60 }} />
          </View>
          <View style={{ width: '65%', height: 60 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Text style={styles.specialOffer}>Special Offers</Text>
              <Image source={emoji} width={20} height={20} />
            </View>
            <View>
              <Text numberOfLines={2} style={styles.specialText}>
                We make sure you get the offer you need at best prices
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.OuterVisitnow}>
          {/* Left Vertical Gradient + Stars */}
          <LinearGradient
            colors={['#EFAD18', '#F8D7B4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientStrip}
          >
            <Image
              source={require('../assets/images/Stars.png')}
              style={styles.starImage}
              resizeMode="contain"
            />
          </LinearGradient>

          {/* Middle: Shoe Image */}
          <Image source={Heals} style={styles.healsImage} />

          {/* Right: Text + Button */}
          <View style={styles.rightContent}>
            <View style={styles.rightText}>
              <Text style={styles.innerContentText}>Flat and Heels</Text>
              <Text numberOfLines={1} style={styles.innerSubText}>
                Stand a chance to get rewarded
              </Text>
            </View>
            <TouchableOpacity style={styles.VisitNowButton}>
              <Text style={styles.VisitNow}>Visit now →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ViewAllComponent
          title="Deal of the Day"
          timer="2h 55m 20s remaining"
          bgColor="rgba(253, 110, 135, 1)"
          route="Wishlist"
          Icon={Date}
        />
        <FlatList
          data={TrendingProductsData}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ProductCard item={item} />}
        />

        <View style={{ width: 343, height: 270 }}>
          <Image
            source={require('../assets/images/SummerSale.png')}
            resizeMode="contain"
            style={{ borderRadius: 8 }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8,
            }}
          >
            <View>
              <Text style={styles.SummerText}>New Arrivals</Text>
              <Text style={styles.SummerSubText}>Summer's 25 Collections</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View all →</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sponcerContainer}>
          <Text style={styles.Sponcer}>Sponser</Text>
          <Image source={require('../assets/images/SponcerShoe.png')} />
          <View style={styles.offerContainer}>
            <Text style={styles.offer}>up to 50% Off</Text>
            <GreaterThan />
          </View>
        </View>
      </ScrollView>
      {/* Trending Section */}
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },

  specialContainer: {
    flexDirection: 'row',
    height: 84,
    gap: 24,
    marginLeft: 8,
    alignItems: 'center',
  },

  offerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offer: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  sponcerContainer: {},
  Sponcer: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
  },

  gradientStrip: {
    width: 11,
    height: 171,
    justifyContent: 'center',
  },
  SummerText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 22,
  },
  SummerSubText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
  },
  OuterVisitnow: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(231, 231, 235, 0.3)',
    borderRadius: 8,
    height: 171,
    marginTop: 20,
  },
  starImage: {
    width: 77.71,
    height: 156,
    marginLeft: 6,
  },

  healsImage: {
    marginTop: 24,
    resizeMode: 'cover',
  },
  rightContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rightText: {
    width: '100%',
    marginRight: 16,
  },
  innerContentText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    color: 'rgba(35, 35, 39, 1)',
  },
  innerSubText: {
    fontSize: 10,
    lineHeight: 16,
    color: 'rgba(35, 35, 39, 1)',
    fontFamily: 'Montserrat-Regular',
  },
  StarBg: {
    marginVertical: 7,
    width: 77.71,
    height: 156,
  },
  viewAll: {
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(248, 55, 88, 1)',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
  },

  VisitNowButton: {
    marginTop: 10,
    backgroundColor: 'rgba(248, 55, 88, 1)',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  VisitNow: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  specialOffer: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 8,
    lineHeight: 20,
    fontWeight: 500,
  },
  specialText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Montserrat-Regular',
  },
});
