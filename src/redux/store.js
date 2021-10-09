import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import { reducers, INITIAL_STATE } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
