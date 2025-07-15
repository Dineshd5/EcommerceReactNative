import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Sort from '../assets/svg/Sort.svg';
import Filter from '../assets/svg/Filter.svg';
const SortAndFilter = ({ title }) => {
  return (
    <View style={styles.featuredRow}>
      <Text style={styles.sectionTitle}>{title}</Text>
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
  );
};

export default SortAndFilter;

const styles = StyleSheet.create({
  featuredRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
