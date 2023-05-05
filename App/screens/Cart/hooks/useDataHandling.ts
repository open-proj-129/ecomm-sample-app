import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {addProductToCart} from '../../../redux/slices/cartSlice';

const useDataHandling = () => {
  /** data from redux using use selector hook */
  const {
    cart: {addedProducts},
  } = useAppSelector(state => state);

  /** dispatch hook */
  const dispatch = useAppDispatch();

  /**
   * when user wants to remove an item from cart.
   * @param productId - id of product to be removed
   */
  const onRemoveFromCart = (productId: number) => {
    const temp = addedProducts.filter(item => item.product.id !== productId);

    dispatch(addProductToCart(temp));
  };

  /**
   * when user wants to increase quantity of product.
   * @param productId - id of product to be increased
   */
  const onIncreaseQuantity = (productId: number) => {
    let temp = [...addedProducts];
    const objIndex = temp.findIndex(item => item.product.id === productId);

    temp[objIndex].quantity += 1;

    dispatch(addProductToCart(temp));
  };

  /**
   * when user wants to decrease quantity of product.
   * @param productId - id of product to be decreased
   */
  const onDecreaseQuantity = (productId: number) => {
    let temp = [...addedProducts];
    const objIndex = temp.findIndex(item => item.product.id === productId);

    /** if quantity is one and user press decrease. it totally remove product from cart. */
    if (temp[objIndex].quantity === 1) {
      onRemoveFromCart(productId);
      return;
    }

    temp[objIndex].quantity -= 1;

    dispatch(addProductToCart(temp));
  };

  return {
    addedProducts,
    onRemoveFromCart,
    onDecreaseQuantity,
    onIncreaseQuantity,
  };
};

export default useDataHandling;
