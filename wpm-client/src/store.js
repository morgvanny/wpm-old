import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import tests from './reducers/tests';
import testFormData from './reducers/testFormData';

const reducers = combineReducers({
  tests,
  testFormData
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
