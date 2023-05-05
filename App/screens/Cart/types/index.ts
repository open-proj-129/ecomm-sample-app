/**
 * types for cart screen.
 */

import {AddedProductType} from '../../../redux/types/cartSliceTypes';

export interface CartListItemTypes extends AddedProductType {
  onPressIncrease?: (productId: number) => void;
  onPressDecrease?: (productId: number) => void;
  onPressRemove?: (productId: number) => void;
}
