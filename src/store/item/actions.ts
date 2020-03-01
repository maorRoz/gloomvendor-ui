import { ItemActionTypes, FETCH_ITEMS, SAVE_ITEMS } from './types';
import { ShopQuantity, Item } from '../../types';
import { parseShopQuantityToItem } from './parseShopQuantityToItem';

export const fetchItems = (): ItemActionTypes => ({
  type: FETCH_ITEMS
});

export const saveItems = (shopQuantities: ShopQuantity[]): ItemActionTypes => {
  const items = shopQuantities.map<Item>(parseShopQuantityToItem);

  return {
    type: SAVE_ITEMS,
    payload: items
  };
};
