import { Action } from 'redux';
import { Item } from '../../types';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const SAVE_ITEMS = 'SAVE_ITEMS';

type FetchItemsAction = Action<typeof FETCH_ITEMS>;
interface SaveItemsAction extends Action<typeof SAVE_ITEMS> {
  payload: Item[];
}

export type ItemActionTypes = FetchItemsAction | SaveItemsAction;
