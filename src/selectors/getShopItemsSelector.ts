import { GloomVendorState } from '../store';
import { Item } from '../types';

export const getShopItemsSelector = (state: GloomVendorState): Item[] =>
  state.item.items;
