import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import { home, INITIAL_STATE } from './reducers/home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  home,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
