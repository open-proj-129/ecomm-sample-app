/**
 * this file contains all screens we will include in navigation.
 */

import {APP_ROUTES} from '../routes';
import Products from '../../screens/Products';
import ProductDetails from '../../screens/ProductDetails';
import Cart from '../../screens/Cart';
import {ScreenOptions} from '../types';

export default {
  [APP_ROUTES.PRODUCTS]: {
    component: Products,
    options: {
      title: 'Products',
    },
  },
  [APP_ROUTES.PRODUCT_DETAILS]: {
    component: ProductDetails,
    options: {
      title: '',
    },
  },
  [APP_ROUTES.CART]: {
    component: Cart,
    options: {
      title: '',
    },
  },
} as ScreenOptions;
