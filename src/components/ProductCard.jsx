import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Rating } from 'react-native-ratings';

const DeviceWidth = Dimensions.get('window').width;
console.log(DeviceWidth);

const ProductCard = ({ item, StarVisible, layout }) => {
  let cardStyle;
  switch (layout) {
    case 'horizontal':
      cardStyle = styles.HorizontalCard;
      break;
    case 'horizontalSmall':
      cardStyle = styles.horizontalSmall;
      break;
    default:
      cardStyle = styles.GridCard;
      break;
  }

  return (
    <View style={cardStyle}>
      <Image
        source={item.image}
        style={
          (styles.image,
          {
            resizeMode: `${cardStyle === 'horizontal'} ` ? 'contain' : 'cover',
          })
        }
      />
      <Text style={styles.title}>{item.title}</Text>
      {item.SubTitle && (
        <Text numberOfLines={2} style={styles.SubTitle}>
          {item.SubTitle}
        </Text>
      )}
      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        {item.originalPrice === null && (
          <View style={styles.offerPrice}>
            <Text style={styles.strike}>{item.originalPrice}</Text>
            <Text style={styles.offer}>{item.discount}</Text>
          </View>
        )}
      </View>

      {/* Star Rating */}
      {StarVisible && item.rating && (
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
  HorizontalCard: {
    width: DeviceWidth / 2 - 20,
    height: 300,
    marginRight: 12,
    marginVertical: 16,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 1,
    padding: 4,
    justifyContent: 'space-between',
    alignSelf: 'flex-start', // Prevent stretching
    flexShrink: 1, // Allow shrinking to fit content
  },
  GridCard: {
    width: DeviceWidth / 2 - 20,
    marginVertical: 8,
    borderRadius: 6,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 1,
    padding: 4,
  },

  horizontalSmall: {
    width: DeviceWidth / 2 - 20,
    marginRight: 12,
    marginVertical: 16,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 1,
    padding: 4,
  },
  image: {
    height: 124,
    width: '100%',
    // aspectRatio: 1, // or 3/2 or 16/9 based on your image shape
    borderRadius: 4,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 16,
    fontWeight: '500',
  },
  SubTitle: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 16,
    fontWeight: '400',
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
  },
  reviewText: {
    fontSize: 12,
    color: 'rgba(164, 169, 179, 1)',
  },
});
