import {Dimensions, StyleSheet} from 'react-native';

export const timelinePage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd8dc',
  },
});

export const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  logo: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  logoText: {
    color: 'purple',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
