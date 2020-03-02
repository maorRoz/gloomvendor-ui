import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ShopPage } from './components';

export const App = () => (
  <Provider store={store}>
    <ShopPage />
  </Provider>
);

export default App;
