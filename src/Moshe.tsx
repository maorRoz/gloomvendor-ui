import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from './store';
import { getShopItemsSelector } from './selectors';

export const Moshe = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const items = useSelector(getShopItemsSelector);

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <div>{item.name}</div>
          <img src={item.image} />
        </div>
      ))}
    </>
  );
};
