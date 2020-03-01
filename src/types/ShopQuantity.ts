import { Item } from './Item';
import { Prosperity } from './Prosperity';

const RawItemQuantity = [1, 2, 4] as const;

type RawItem = Omit<Item, 'quantity'> & {
  quantity: typeof RawItemQuantity[number];
  prosperity: typeof Prosperity[number];
};

export type ShopQuantity = {
  quantity: Item['quantity'];
  item: RawItem;
};
