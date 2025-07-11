import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import TrendingProducts from '../components/TrendingProducts';

// Inside Home Screen JSX

import CategoryScroll from '../components/CategoryScroll';
import BannerCard from '../components/BannerCard';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

const TrendingScreen = () => {
  const navigation = useNavigation(); // <-- Add this
  const categories = ['Beauty', 'Fashion', 'Kids', 'Mens', 'Womens'];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Stylish</Text>
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.avatar}
        />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#aaa" />
        <TextInput
          placeholder="Search any Product..."
          style={styles.searchInput}
        />
        <Icon name="mic-outline" size={20} color="#aaa" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Category Scroll */}
        <CategoryScroll categories={categories} />

        {/* Banner */}
        <BannerCard />

        {/* Deal of the Day */}
        <View style={styles.dealRow}>
          <Text style={styles.sectionTitle}>Deal of the Day</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all →</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={[...Array(4).keys()]} // replace with real product data
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={() => <ProductCard />}
        />

        {/* Special Offer / Trending / New Arrivals etc */}
        {/* Add more sections like above */}
      </ScrollView>
      <TrendingProducts navigation={navigation} />
    </SafeAreaView>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A2FA4',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    marginVertical: 12,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  dealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  viewAll: {
    fontSize: 14,
    color: '#3478f6',
  },
});
