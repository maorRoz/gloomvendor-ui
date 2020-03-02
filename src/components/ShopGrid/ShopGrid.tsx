import React from 'react';
import { useSelector } from 'react-redux';
import { getShopItemsSelector } from '../../selectors';
import { Grid } from './ShopGrid.styled';
import { ItemCard } from '../ItemCard';

export const ShopGrid = () => {
  const items = useSelector(getShopItemsSelector);

  return (
    <Grid>
      {items.map((item, index) => (
        <ItemCard key={index} name={item.name} image={item.image} />
      ))}
    </Grid>
  );
};
