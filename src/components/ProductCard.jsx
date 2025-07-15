import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Rating } from 'react-native-ratings';

const ProductCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      {item.SubTitle && <Text style={styles.SubTitle}>{item.SubTitle}</Text>}
      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.offerPrice}>
          <Text style={styles.strike}>{item.originalPrice}</Text>
          <Text style={styles.offer}>{item.discount}</Text>
        </View>
      </View>

      {/* Star Rating */}
      {item.rating && (
        <View style={styles.ratingContainer}>
          <Rating type="star" readonly startingValue={4.5} imageSize={14} />
          <Text style={styles.reviewText}>{item.reviews}</Text>
        </View>
      )}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    maxWidth: 170,
    marginRight: 12,
    marginVertical: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 1,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 124,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 16,
    fontWeight: '500',
    marginTop: 4,
  },
  SubTitle: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 16,
    fontWeight: '400',
    marginTop: 4,
  },
  priceRow: {
    alignItems: 'flex-start',
    gap: 6,
    marginTop: 4,
  },

  price: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  offerPrice: {
    flexDirection: 'row',
    gap: 4,
  },
  strike: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  offer: {
    fontSize: 10,
    lineHeight: 16,
    color: 'rgba(254, 115, 92, 1)',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  reviewText: {
    fontSize: 12,
    color: '#444',
  },
});
