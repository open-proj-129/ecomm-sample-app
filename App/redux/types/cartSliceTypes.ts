/**
 * cart slice types.
 */

import {ProductItemTypes} from './prodctsServiceTypes';

export interface AddedProductType {
  quantity: number;
  product: ProductItemTypes;
}

export interface CartSliceStatesTypes {
  addedProducts: Array<AddedProductType>;
}
