import { all, fork } from 'redux-saga/effects';
import { watchFetchItemsSaga } from './item/sagas/watchFetchItems.saga';

const sagas = [watchFetchItemsSaga];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
