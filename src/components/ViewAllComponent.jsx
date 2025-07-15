import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ViewAllComponent = ({ title, timer, bgColor, Icon, route }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.dealRow, { backgroundColor: bgColor }]}>
      <View>
        <Text style={styles.sectionTitleDeal}>{title}</Text>
        <View style={styles.Alarm}>
          <Icon width={16} height={16} />
          <Text style={styles.timerText}>{timer}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Text style={styles.viewAll}>View all →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAllComponent;

const styles = StyleSheet.create({
  timerText: {
    fontSize: 12,
    color: '#ffffff',
    marginTop: 2,
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
  Alarm: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
