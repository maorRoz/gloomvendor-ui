import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { GetShopQuantitiesApi } from '../api';
import { ShopQuantity } from '../../../types';
import { saveItems } from '../actions';
import { FETCH_ITEMS } from '../types';

export function* fetchItemsSaga() {
  try {
    const response: AxiosResponse<ShopQuantity[]> = yield call(
      GetShopQuantitiesApi
    );
    const shopQuantities = response.data;
    yield put(saveItems(shopQuantities));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error dude');
  }
}

export function* watchFetchItemsSaga() {
  yield takeLatest(FETCH_ITEMS, fetchItemsSaga);
}
