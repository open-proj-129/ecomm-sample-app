/**
 * styles for products screen.
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    backgroundColor: 'rgba(128, 139, 130, 0.7)',
    paddingVertical: 5,
  },
  imageView: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  productDetail: {
    flex: 1,
  },
  nameText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  detailButton: {
    backgroundColor: 'yellow',
    width: 150,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
