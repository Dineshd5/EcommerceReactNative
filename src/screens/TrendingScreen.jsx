import React from 'react';
import { StyleSheet, StatusBar, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TrendingProductsData } from '../data/TrendingProductsData.js';
import ProductCard from '../components/ProductCard.jsx';
import SortAndFilter from '../components/SortAndFilter.jsx';
import Header from '../components/Header.jsx';
const TrendingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        {/* Header */}
        <Header />
        {/*  Sort And Filter*/}
        <SortAndFilter title="52,082+ Items" />
        <FlatList
          numColumns={2}
          data={TrendingProductsData}
          contentContainerStyle={{ paddingBottom: 240 }}
          horizontal={false}
          keyExtractor={item => item.id}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProductCard StarVisible={true} item={item} />
          )}
        />
      </View>
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
});
