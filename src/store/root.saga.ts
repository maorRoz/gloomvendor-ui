import { all, fork } from 'redux-saga/effects';
import { watchFetchItemsSaga } from './item';

const sagas = [watchFetchItemsSaga];

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
