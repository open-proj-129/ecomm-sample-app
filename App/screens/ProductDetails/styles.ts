/**
 * styles for product details screen.
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageView: {
    width: 200,
    height: 300,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textView: {
    marginTop: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  colorPriceText: {
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    alignSelf: 'center',
    marginTop: 14,
    width: 150,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
