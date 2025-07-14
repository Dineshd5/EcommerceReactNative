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
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryScroll from '../components/CategoryScroll';
import BannerCard from '../components/BannerCard';
import ProductCard from '../components/ProductCard';
import Search from '../assets/svg/Search.svg';
import Mic from '../assets/svg/Mic.svg';
import Sort from '../assets/svg/Sort.svg';
import Filter from '../assets/svg/Filter.svg';
import { Allfeatures } from '../data/AllFeatured.js';
import Alarm from '../assets/svg/Alarm.svg';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Header with Drawer Menu */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/images/MenuBar.png')} />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.logo}>Stylish</Text>
        </View>

        <Image
          source={require('../assets/images/profile.png')}
          style={styles.avatar}
        />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Search width={28} height={28} />
        <TextInput
          placeholder="Search any Product..."
          placeholderTextColor="rgba(187, 187, 187, 1)" // light gray placeholder
          style={styles.searchInput}
        />
        <Mic width={24} height={24} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.featuredRow}>
          <Text style={styles.sectionTitle}>All Featured</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity style={styles.filterSort}>
              <Text>Sort</Text>
              <Sort width={16} height={16} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterSort}>
              <Text>Filter</Text>
              <Filter width={16} height={16} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Category Scroll */}
        <CategoryScroll catagories={Allfeatures} />

        {/* Banner */}
        <BannerCard />

        {/* Deal of the Day */}
        <View style={styles.dealRow}>
          <View>
            <Text style={styles.sectionTitleDeal}>Deal of the Day</Text>
            <View style={styles.Alarm}>
              <Alarm width={16} height={16} />
              <Text style={styles.timerText}>2h 55m 20s remaining</Text>
            </View>
          </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#rgba(67, 146, 249, 1)',
    fontFamily: 'LibreCaslonText-Regular',
  },
  logoImage: {
    width: 38.78,
    height: 31.03,
  },
  Alarm: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  featuredRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterSort: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#333',
  },
  timerText: {
    fontSize: 12,
    color: '#ffffff',
    marginTop: 2,
  },

  logoContainer: {
    flexDirection: 'row',
    gap: 9,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 2, // Android only
    marginVertical: 12,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchInput: {
    color: 'rgba(187, 187, 187, 1)',
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  sectionTitleDeal: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  dealRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(67, 146, 249, 1)',
    justifyContent: 'space-between',
    marginTop: 20,
    height: 60,
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  viewAll: {
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
  },
});
