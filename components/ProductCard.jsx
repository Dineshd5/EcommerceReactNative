import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/images/shoe.png')}
        style={styles.image}
      />
      <Text style={styles.title}>HRX by Hrithik</Text>
      <Text style={styles.price}>
        ₹2499 <Text style={styles.strike}>₹4999</Text>
      </Text>
      <Text style={styles.rating}>★ 4.5 (344k+)</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    color: '#f83758',
  },
  strike: {
    textDecorationLine: 'line-through',
    color: '#aaa',
    marginLeft: 4,
  },
  rating: {
    fontSize: 12,
    color: '#666',
  },
});
