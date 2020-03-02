import React from 'react';
import { Card } from './ItemCard.styled';

export type ItemCardProps = {
  name: string;
  image: string;
};

export const ItemCard = ({ name, image }: ItemCardProps) => (
  <Card>
    <div>{name}</div>
    <div>
      <img src={image} />
    </div>
  </Card>
);
