/**
 * types for product details screen.
 */

import {CommonScreenTypes} from '../../../types';
import {Route} from '@react-navigation/native';

export interface RouteParams {
  productId: number;
}

export interface ProductDetailScreenTypes extends CommonScreenTypes {
  route: Route<any, RouteParams>;
}
