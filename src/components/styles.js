import {Dimensions, StyleSheet} from 'react-native';
export const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#90a4ae',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#78909c',
  },
});
export const input = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
  },
});
export const button = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export const button_outline = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: 'purple',
    fontWeight: 'bold',
  },
});

export const postItem = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'white',
    // position: 'relative',
  },
  headerContainer: {
    padding: 5,
    backgroundColor: '#9c27b0',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
  },
  bodyContainer: {
    padding: 5,
  },
  time: {
    color: 'white',
    fontStyle: 'italic',
  },
});

export const post_input = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b0bec5',
  },
  inputContainer: {
    flex: 1,
  },
  button: {},
});

export const topicModal = StyleSheet.create({
  modal: {
    margin: 5,
    padding: 5,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topicItemContainer: {
    borderBottomColor: 'black',
    margin: 5,
    padding: 5,
  },
  topicItemText: {
    fontSize: 18,
  },
});
