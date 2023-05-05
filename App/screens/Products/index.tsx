/**
 * products listing screen.
 * this screen shows a complete list of products.
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
import {CommonScreenTypes} from '../../types';
import {ProductListItemTypes} from './types';
import Loading from '../../components/Loading';

/**
 * render item component for flat list to represents single product in list.
 * @param props - products details like name, price, image, id etc.
 */
const ListItem: FunctionComponent<ProductListItemTypes> = props => {
  const {id, img, name, price, colour, onPressDetails = () => {}} = props;

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

        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => onPressDetails(id)}>
          <Text>{'Product Details'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 * main product component.
 * this component act as complete screen.
 * @param navigation - navigation prop
 */
const Products: FunctionComponent<CommonScreenTypes> = ({navigation}) => {
  /** custom hook to handle logics */
  const {products, isLoading, onPressDetails} = useDataHandling(navigation);

  /**
   * if data is loading show a loader.
   */
  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ListItem
              {...item}
              onPressDetails={productId => onPressDetails(productId)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;
