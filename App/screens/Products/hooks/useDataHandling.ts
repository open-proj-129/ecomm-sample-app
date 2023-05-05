/**
 * custom hook to handle logics related to products screen.
 */

import {useGetProductsListQuery} from '../../../redux/services/products';
import {useEffect, useState} from 'react';
import {ProductItemTypes} from '../../../redux/types/prodctsServiceTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {APP_ROUTES} from '../../../navigation/routes';

const useDataHandling = (navigation: StackNavigationProp<any>) => {
  /** useQuery to fetch all products list */
  const {isLoading, data, error} = useGetProductsListQuery();

  /** states */
  const [products, setProducts] = useState<Array<ProductItemTypes>>();

  /** handle data and errors on successful completion of api request */
  useEffect(() => {
    if (!error && data) {
      setProducts(data);
    } else {
      error && console.log(error);
    }
  }, [error, data, isLoading]);

  /**
   * when user press product details button.
   * @param productId - id of product for which user want to see details.
   */
  const onPressDetails = (productId: number) => {
    navigation.navigate(APP_ROUTES.PRODUCT_DETAILS, {productId});
  };

  return {products, isLoading, onPressDetails};
};

export default useDataHandling;
