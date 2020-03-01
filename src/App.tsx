import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Moshe } from './Moshe';

export const App = () => (
  <Provider store={store}>
    <Moshe />
  </Provider>
);

export default App;
