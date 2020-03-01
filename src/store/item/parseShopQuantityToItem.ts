import { ShopQuantity, Item } from '../../types';

export const parseShopQuantityToItem = ({
  quantity,
  item: rawItem
}: ShopQuantity): Item => {
  const { id, name, slot, image, price } = rawItem;
  return { id, name, slot, image, price, quantity };
};
