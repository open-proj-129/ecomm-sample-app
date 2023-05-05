/**
 * types for products screen.
 */

import {ProductItemTypes} from '../../../redux/types/prodctsServiceTypes';

export interface ProductListItemTypes extends ProductItemTypes {
  onPressDetails?: (productId: number) => void;
}
