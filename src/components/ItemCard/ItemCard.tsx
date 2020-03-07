import React, { useMemo } from 'react';
import {
  Card,
  CardTop,
  CardImageLayout,
  CardImageCover,
  CardBottom,
  CardImage
} from './ItemCard.styled';
import { Item } from '../../types';

export type ItemCardProps = Item;

export const ItemCard = ({ name, quantity, image }: ItemCardProps) => {
  const outOfStock = useMemo(() => quantity === 0, [quantity]);

  return (
    <Card>
      <CardTop>
        <CardImageLayout
          onClick={() => {
            // eslint-disable-next-line no-alert
            // eslint-disable-next-line no-undef
            !outOfStock && alert('lol');
          }}
          outOfStock={outOfStock}
        >
          <CardImage src={image} alt={name} outOfStock={outOfStock} />
          {!outOfStock && <CardImageCover />}
        </CardImageLayout>
      </CardTop>
      <CardBottom outOfStock={outOfStock}>X{quantity}</CardBottom>
    </Card>
  );
};
