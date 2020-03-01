import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { rootSaga } from './root.saga';
import { sagaMiddleware } from './middlewares';

export type GloomVendorState = ReturnType<typeof rootReducer>;

const configureStore = (): Store<GloomVendorState, any> => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore();
