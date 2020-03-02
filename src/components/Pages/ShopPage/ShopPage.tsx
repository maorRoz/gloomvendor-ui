import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../../../store';
import { ShopGrid } from '../../ShopGrid';

export const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return <ShopGrid />;
};
