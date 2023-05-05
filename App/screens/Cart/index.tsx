/**
 * cart screen.
 * shows list of all items in cart.
 * user can manage added products.
 */

import React, {FunctionComponent} from 'react';
import useDataHandling from './hooks/useDataHandling';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {CartListItemTypes} from './types';

/**
 * render item component for flat list to represents single product in list.
 * @param props - products details like name, price, image, id, quantity etc.
 */
const ListItem: FunctionComponent<CartListItemTypes> = props => {
  const {
    quantity,
    product: {id, img, colour, name, price},
    onPressIncrease = () => {},
    onPressDecrease = () => {},
    onPressRemove = () => {},
  } = props;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageView}>
        <Image
          source={{uri: img}}
          resizeMode={'contain'}
          style={styles.image}
        />
      </View>

      <View style={styles.productDetail}>
        <View>
          <Text style={styles.nameText} numberOfLines={2}>
            {name}
          </Text>
          <Text>{`Colour: ${colour}`}</Text>
          <Text>{`$${price.toFixed(2)}`}</Text>
        </View>

        <View style={styles.quantityManagerView}>
          <TouchableOpacity
            hitSlop={{top: 40, left: 40, right: 40, bottom: 40}}
            onPress={() => onPressDecrease(id)}>
            <Text style={styles.incrementDecrementText}>{'-'}</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity
            hitSlop={{top: 40, left: 40, right: 40, bottom: 40}}
            onPress={() => onPressIncrease(id)}>
            <Text style={styles.incrementDecrementText}>{'+'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => onPressRemove(id)}>
          <Text>{'Remove From Cart'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 * render item component for flat list to represents single product in list.
 */
const Cart = () => {
  /** custom hook to handle logics */
  const {
    addedProducts,
    onDecreaseQuantity,
    onIncreaseQuantity,
    onRemoveFromCart,
  } = useDataHandling();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={addedProducts}
          renderItem={({item}) => (
            <ListItem
              {...item}
              onPressDecrease={productId => onDecreaseQuantity(productId)}
              onPressIncrease={productId => onIncreaseQuantity(productId)}
              onPressRemove={productId => onRemoveFromCart(productId)}
            />
          )}
          keyExtractor={item => item.product.id.toString()}
          ListEmptyComponent={
            <Text style={styles.noItem}>{'No Item in cart.'}</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
