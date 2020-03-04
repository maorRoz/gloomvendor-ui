import React from 'react';
import {
  Card,
  CardImageLayout,
  CardImageCover,
  CardBottom
} from './ItemCard.styled';
import { Item } from '../../types';

export type ItemCardProps = Item;

export const ItemCard = ({ name, quantity, image }: ItemCardProps) => (
  <Card>
    <CardImageLayout style={{ position: 'relative' }}>
      <img src={image} alt={name} />
      <CardImageCover />
    </CardImageLayout>
    <CardBottom>X{quantity}</CardBottom>
  </Card>
);
