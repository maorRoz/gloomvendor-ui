enum ItemSlot {
  OneHand = 'One Hand',
  TwoHands = 'Two Hands',
  Head = 'Head',
  Body = 'Body',
  Legs = 'Legs',
  SmallItem = 'Small Item'
}

const ItemQuantity = [0, 1, 2, 3, 4] as const;

export type Item = {
  id: number;
  name: string;
  slot: ItemSlot;
  image: string;
  price: string;
  quantity: typeof ItemQuantity[number];
};
