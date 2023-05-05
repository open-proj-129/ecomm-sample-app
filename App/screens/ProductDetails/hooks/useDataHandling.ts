/**
 * custom hook to handle logics related to product details screen.
 */

import {useGetProductDetailQuery} from '../../../redux/services/products';
import {useEffect, useState} from 'react';
import {ProductItemTypes} from '../../../redux/types/prodctsServiceTypes';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {addProductToCart} from '../../../redux/slices/cartSlice';

const useDataHandling = (productId: number) => {
  /** data from redux store */
  const {
    cart: {addedProducts},
  } = useAppSelector(state => state);

  /** useQuery to fetch product details*/
  const {isLoading, data, error} = useGetProductDetailQuery(productId);

  /** states */
  const [product, setProduct] = useState<ProductItemTypes | null>(null);

  /** dispatch hook */
  const dispatch = useAppDispatch();

  /** handle data and errors on successful completion of api request */
  useEffect(() => {
    if (!error && data) {
      setProduct(data);
    } else {
      error && console.log(error);
    }
  }, [error, data, isLoading]);

  /**
   * when user adds an item to cart.
   */
  const onPressAddToCart = () => {
    if (product) {
      const temp = [...addedProducts];

      /** check if item is already added in cart */
      let itemExists = temp.filter(item => item.product.id === product.id);

      /** if item already added increase quantity, else push a new item in cart */
      if (itemExists.length > 0) {
        const objIndex = temp.findIndex(item => item.product.id === productId);

        temp[objIndex].quantity += 1;
      } else {
        temp.push({
          quantity: 1,
          product: product,
        });
      }

      dispatch(addProductToCart(temp));
    }
  };

  return {product, isLoading, onPressAddToCart};
};

export default useDataHandling;
