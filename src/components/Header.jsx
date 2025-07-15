import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Search from '../assets/svg/Search.svg';
import Mic from '../assets/svg/Mic.svg';
const Header = () => {
  return (
    <View>
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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    gap: 9,
  },
  logoImage: {
    width: 38.78,
    height: 31.03,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(67, 146, 249, 1)',
    fontFamily: 'LibreCaslonText-Regular',
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
    color: '#000',
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
  },
});
