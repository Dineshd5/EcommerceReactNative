import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';

const CategoryScroll = ({ catagories }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {Array.isArray(catagories) &&
          catagories.map((Allfeature, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Image source={Allfeature.Img} style={styles.image} />
              <Text style={styles.categoryText} numberOfLines={1}>
                {Allfeature.name}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default CategoryScroll;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  categoryButton: {
    flex: 1,
    alignItems: 'center',
    marginRight: 6,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  image: {
    width: 56,
    height: 56,
    marginBottom: 8,
    resizeMode: 'contain',
  },
});
