import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: height - 200,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,

    fontFamily: 'Avenir',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
});
