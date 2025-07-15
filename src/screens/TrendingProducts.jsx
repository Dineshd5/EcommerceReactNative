import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TrendingProductsData } from '../data/TrendingProductsData';

const TrendingProducts = ({ navigation }) => {
  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.productImage} />
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.originalPrice}>{item.originalPrice}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.titleText}>Trending Products</Text>
          <Text style={styles.subtitleText}>Last Date 29/02/22</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('TrendingScreen')}>
          <Text style={styles.viewAll}>View all →</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Product List */}
      <FlatList
        data={TrendingProductsData}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default TrendingProducts;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
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
