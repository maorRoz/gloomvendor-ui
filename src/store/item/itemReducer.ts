import { Reducer } from 'redux';
import { SAVE_ITEMS, ItemActionTypes } from './types';
import { Item } from '../../types';

type ItemState = { items: Item[] };

const initialState: ItemState = { items: [] };

export const itemReducer: Reducer<ItemState, ItemActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SAVE_ITEMS: {
      const items = action.payload;
      return { ...state, items };
    }
    default:
      return state;
  }
};
