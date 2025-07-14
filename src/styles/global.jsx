import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const Gstyles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
  },
  primaryColor: {
    color: 'rgba(248, 55, 88, 1)',
  },
  dynamicImage: {
    width: width * 1.0,
    height: height * 0.4,
    resizeMode: 'contain',
  },
});
