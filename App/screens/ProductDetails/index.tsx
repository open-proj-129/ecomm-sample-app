/**
 * products details screen.
 * this screen shows details of specific product..
 */

import React, {FunctionComponent} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ProductDetailScreenTypes} from './types';
import useDataHandling from './hooks/useDataHandling';
import styles from './styles';
import Loading from '../../components/Loading';

const ProductDetails: FunctionComponent<ProductDetailScreenTypes> = ({
  route,
}) => {
  /** handle route params */
  const {productId} = route.params || {};

  /** custom hook to handle logics */
  const {product, isLoading, onPressAddToCart} = useDataHandling(productId);

  /**
   * if data is loading show a loader.
   */
  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            source={{uri: product?.img}}
            resizeMode={'contain'}
            style={styles.image}
          />
        </View>

        <View style={styles.textView}>
          <View>
            <Text style={styles.nameText}>{product?.name}</Text>
            <Text
              style={
                styles.colorPriceText
              }>{`Colour: ${product?.colour}`}</Text>
            <Text style={styles.colorPriceText}>{`$${product?.price.toFixed(
              2,
            )}`}</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressAddToCart()}>
            <Text>{'Add To Cart'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
