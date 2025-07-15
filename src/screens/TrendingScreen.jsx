import React from 'react';
import {
  StyleSheet,
  

  StatusBar,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TrendingProductsData } from '../data/TrendingProductsData.js';
import ProductCard from '../components/ProductCard.jsx';
import SortAndFilter from '../components/SortAndFilter.jsx';
import Header from '../components/Header.jsx';
const TrendingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />

      <FlatList
        numColumns={2}
        data={TrendingProductsData}
        horizontal={false}
        keyExtractor={item => item.id}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard item={item} />}
        contentContainerStyle={styles.list}
      />
      {/*  Sort And Filter*/}
      <SortAndFilter title="52,082+ Items" />
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

  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  subtitleText: {
    fontSize: 12,
    color: '#999',
  },
  viewAll: {
    fontSize: 14,
    color: '#F83758',
    fontWeight: '600',
  },
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    width: 140,
    padding: 8,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  productImage: {
    height: 100,
    width: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    marginTop: 6,
    fontWeight: '500',
    color: '#000',
  },
  priceRow: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    gap: 4,
  },
  price: {
    fontWeight: '700',
    color: '#000',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: '#888',
  },
  discount: {
    fontSize: 12,
    color: '#F83758',
    fontWeight: '600',
  },
});
